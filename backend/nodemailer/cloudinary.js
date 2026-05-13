
import { v2 as cloudinary } from "cloudinary"
import { CloudinaryStorage } from "multer-storage-cloudinary"

const connectedCloudinary = async () => {
  await cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY


  })
  console.log("Cloudinary Successfully Connected")
}
export default connectedCloudinary;

export const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'image_uploads',
    allowed_formats: ['jpg', 'jpeg', 'png'],
    transformation: [{ width: 1000, height: 1000, crop: 'limit' }]

  }

});

export const videoStorage = new CloudinaryStorage({
  cloudinary,
  params: {

    folder: 'videos_Upload',
    resource_type: 'video',
     allowed_formats: ['mp4', 'mov', 'avi', 'mkv'],
    format: async (req, file) => 'mp4',
    public_id: (req, file) => file.originalname.split('.')[0],
  }


});

