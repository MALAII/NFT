import express, { json } from "express";
import dotenv from "dotenv";
import connectdb from "./database/db.js";
import cors from "cors";

import {
  routers,
  volunteerRouters,
  adminLogin,
  volunteerDatasGet,
  volunteerDataDelete
} from "./router/urouter.js";

import connectedCloudinary from "./nodemailer/cloudinary.js";

import {
  imageUpload,
  imageGet,
  imageDelete,
  imageUpdate,
  videosUpload,
  videoGet,
  videoDelete,
  videoUpdate
} from "./adminControllers/adminImagesUploadControllers.js";

import multer from "multer";

const port = process.env.PORT || 3000;

dotenv.config();

const app = express();

connectdb();

app.use(json());

app.use(cors());




/* USER ROUTES */

app.use("/api", routers);

app.use("/api", volunteerRouters);

app.use("/api", adminLogin);




/* IMAGE ROUTES */

app.use("/api/images", imageUpload);

app.use("/api/images", imageGet);

app.use("/api/images", imageDelete);

app.use("/api/images", imageUpdate);




/* VIDEO ROUTES */

app.use("/api/videos", videosUpload);

app.use("/api/videos", videoGet);

app.use("/api/videos", videoDelete);

app.use("/api/videos", videoUpdate);




/* VOLUNTEER ROUTES */

app.use("/api/volunteer", volunteerDatasGet);

app.use("/api/volunteer", volunteerDataDelete);




/* CLOUDINARY */

connectedCloudinary();




/* MULTER ERROR HANDLING */

app.use((err, req, res, next) => {

  if (err instanceof multer.MulterError) {

    switch (err.code) {

      case "LIMIT_FILE_SIZE":

        if (err.field === 'video') {

          return res.json({
            success: false,
            message: "File is large : Maximum video size 30 MB"
          });

        }

        return res.json({
          success: false,
          message: "File is large : Maximum image size 5 MB"
        });




      default:

        if (err.field === 'video') {

          return res.json({
            success: false,
            message: "Please single file upload"
          });

        }




        if (err.field === 'images') {

          console.log(err);

          return res.json({
            success: false,
            message: "Maximum 5 images selected"
          });

        }

    }

  }

  else {

    return res.json({
      success: false,
      message: err.message
    });

  }

});




/* TEST ROUTE */

app.get("/", (req, res) => {

  res.json("Api is running");

});




/* SERVER */

app.listen(port, () => {

  console.log(`Server is running http://localhost:${port}`);

});