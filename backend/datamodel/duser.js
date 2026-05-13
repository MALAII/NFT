import mongoose from "mongoose";

//BECOME VOLUNTEER
const volunteer = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
       
    },

    mobile: {
        type: Number,
        required: true,
    },

    city: {
        type: String,
        required: true
    },

    message: {
        type: String,
        required: true
    },

    role: {
        type: String,
        default: "Volunteer"
    },

}, { timestamps: true });

export const volunteerData = mongoose.model(
    "volunteer-datas",
    volunteer
);

/*
const adminSendOtp = new mongoose.Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    adminOtp: {
        type: String,
        default: ""
    },
    adminExpireOtp: {
        type: Number,
        default: 0
    }
}, { timestamps: true })


export const adminResetPassword = mongoose.model("adminSendOtp", adminSendOtp)
*/


// IMAGE SCHEMA

const adminImageVideos = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    url: {
        type: String,
        required: true
    },

    publicId: {
        type: String,
        required: true
    }

}, { timestamps: true })

export const adminUploadImageVideo = mongoose.model(
    "adminUploadImageVideo",
    adminImageVideos
)


// VIDEO SCHEMA

const videoSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true
    },

    videoUrl: {
        type: String,
        required: true
    },

    cloudinaryId: {
        type: String,
        required: true
    }

}, { timestamps: true });

export const Video = mongoose.model('Video', videoSchema);