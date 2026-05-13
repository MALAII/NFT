import express from "express";
import { adminUploadImageVideo, Video } from "../datamodel/duser.js";
import { parser, videoUpload } from "../nodemailer/multer.js";
import cloudinary from "cloudinary";

const imageRouter = express.Router();




/* IMAGE UPLOAD */

export const imageUpload = imageRouter.post(

  '/image-post',

  parser.array('images', 5),

  async (req, res) => {

    try {

      const { title } = req.body;

      if (!title) {

        return res.status(400).json({
          success: false,
          message: 'Title is required'
        });

      }

      if (!req.files || req.files.length === 0) {

        return res.status(400).json({
          success: false,
          message: 'No images uploaded'
        });

      }

      const uploadedImages = await Promise.all(

        req.files.map(async (file) => {

          return await adminUploadImageVideo.create({

            title: title,

            url: file.path,

            publicId: file.filename

          });

        })

      );

      res.status(201).json(uploadedImages);

    }

    catch (error) {

      console.error('Upload error:', error);

      res.status(500).json({
        success: false,
        message: 'Image upload failed'
      });

    }

  }
);




/* GET IMAGES */

export const imageGet = imageRouter.get(

  '/image-get',

  async (req, res) => {

    try {

      const images =
        await adminUploadImageVideo.find().sort({ createdAt: -1 });

      res.json(images);

    }

    catch (error) {

      res.status(500).json({
        success: false,
        message: 'Server error'
      });

    }

  }
);




/* DELETE IMAGE */

export const imageDelete = imageRouter.delete(

  '/image-delete/:id',

  async (req, res) => {

    try {

      const image =
        await adminUploadImageVideo.findById(req.params.id);

      if (!image) {

        return res.status(404).json({
          success: false,
          message: 'Image not found'
        });

      }

      await cloudinary.uploader.destroy(image.publicId);

      await adminUploadImageVideo.deleteOne({
        _id: req.params.id
      });

      res.json({
        success: true,
        message: 'Image deleted successfully'
      });

    }

    catch (error) {

      res.status(500).json({
        success: false,
        message: 'Delete failed'
      });

    }

  }
);




/* VIDEO UPLOAD */

export const videosUpload = imageRouter.post(

  '/video-post',

  videoUpload.single('video'),

  async (req, res) => {

    try {

      const { title } = req.body;

      if (!title) {

        return res.json({
          success: false,
          message: "Title is required"
        });

      }

      if (!req.file) {

        return res.json({
          success: false,
          message: "No video uploaded"
        });

      }

      const newVideo = await Video.create({

        title: title,

        videoUrl: req.file.path,

        cloudinaryId: req.file.filename

      });

      res.status(201).json({
        success: true,
        newVideo
      });

    }

    catch (err) {

      console.error(err);

      res.status(500).json({
        success: false,
        error: 'Upload failed'
      });

    }

  }
);




/* GET VIDEOS */

export const videoGet = imageRouter.get(

  '/video-get',

  async (req, res) => {

    try {

      const videoFind =
        await Video.find().sort({ createdAt: -1 });

      res.json(videoFind);

    }

    catch (error) {

      res.json({
        success: false,
        message: error
      });

    }

  }
);




/* DELETE VIDEO */

export const videoDelete = imageRouter.delete(

  '/video-delete/:id',

  async (req, res) => {

    try {

      const videoId =
        await Video.findById(req.params.id);

      await cloudinary.uploader.destroy(

        videoId.cloudinaryId,

        {
          resource_type: 'video',
          invalidate: true
        }

      );

      await Video.deleteOne({
        _id: req.params.id
      });

      console.log("successfully deleted videos");

      return res.json({
        success: true,
        message: "Deleted video"
      });

    }

    catch (error) {

      console.log(error);

      res.json({
        success: false,
        message: error
      });

    }

  }
);




/* UPDATE IMAGE TITLE */

export const imageUpdate = imageRouter.put(

  '/image-update/:id',

  async (req, res) => {

    try {

      const { title } = req.body;

      const updatedImage =
        await adminUploadImageVideo.findByIdAndUpdate(

          req.params.id,

          {
            title
          },

          {
            new: true
          }

        );

      res.json({
        success: true,
        updatedImage
      });

    }

    catch (error) {

      console.log(error);

      res.status(500).json({
        success: false,
        message: "Update failed"
      });

    }

  }
);

/* UPDATE VIDEO TITLE */

export const videoUpdate = imageRouter.put(

  '/video-update/:id',

  async (req, res) => {

    try {

      const { title } = req.body;

      const updatedVideo =
        await Video.findByIdAndUpdate(

          req.params.id,

          {
            title
          },

          {
            new: true
          }

        );

      res.json({
        success: true,
        updatedVideo
      });

    }

    catch (error) {

      console.log(error);

      res.status(500).json({
        success: false,
        message: "Video update failed"
      });

    }

  }
);