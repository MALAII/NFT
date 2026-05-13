
import multer from "multer"
import { storage } from "./cloudinary.js";
import { videoStorage } from "./cloudinary.js";



export const parser = multer({
    storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
    fileFilter: (req, file, cb) => {
        if (!file.mimetype.match(/image\/(jpeg|jpg|png)/)) {
            return cb(new Error('Only images are allowed'), false);
        }

        cb(null, true);
    }
});

export const videoUpload = multer({
    storage: videoStorage,
    limits: { fileSize: 30 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        if (!file.mimetype.match(/video\/(mp4|mov|avi|mkv)/)) {
            return cb(new Error('Only video are allowed'), false);
        }

        cb(null, true);
    }

})

