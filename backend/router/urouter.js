import express from "express"

import dotenv from "dotenv";
import mongoose from "mongoose";
import { volunteerData} from "../datamodel/duser.js"

import jwt from "jsonwebtoken"

dotenv.config()
const router = express.Router()

// import twilio from "twilio"
// import transport from "../nodemailer/nodeMailer.js"
// const storeOtp = {};

// export const contactRouters = router.post("/contact-information", async (req, res) => {

//     const { name, email, city, message, phoneNumber } = req.body


//     try {
//         const check = await contact.findOne({ email })
//         if (check) {
//             return res.json({
//                 error: "Email is already exist"
//             })
//         }

//OTPGENERATE
// const otp = Math.floor(100000 + Math.random() * 900000);
// storeOtp[""] = { otp }
// const mailOption = {
//     from: process.env.SENDER_EMAIL,
//     to: email,
//     subject: "WELCOME TO NATIONAL FIRST TRUST.....",
//     html: `<h3> Welcome to national first trust website.
//      Please must enter your otp. Your otp is: ---<h2>${otp}</h2><h3>--- verify otp.</h3>`
// }
// await transport.sendMail(mailOption).catch(error =>{
//     return res.json(`error${error}`)})

// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = new twilio(accountSid, authToken)

// client.messages
//     .create({
//         body: `Your Otp is: ${otp}`,
//      
//
//        messagingServiceSid: process.env.TWILIO_SERVICE_SID,
//         from: process.env.TWILIO_MOBILE_NUMBER,
//         to: `+91${phoneNumber}`
//     })
//     .then(message => console.log(message.sid));

// console.log(city)
// const storeContact = new contact({ name: name, email: email, mobile: phoneNumber, city: city, message: message })
// await storeContact.save()

// return res.json({ success: "successfull" })
//     }
//     catch (error) {
//     return res.json("Error" + error)
// }
// })

// export const otpVerifiy = router.post("/verify-otp", async (req, res) => {
//     const { otpValue } = req.body
//     try {
//         const storeOtps = storeOtp[""]

//         if (storeOtps.otp != otpValue) {
//             delete storeOtps[""]
//             return res.json({
//                 success: false, error: "Invalid Otp,Enter valid otp"
//             })
//         }
//         return res.json({
//             success: "successfull"
//         })
//     } catch (error) {
//         return res.json(""+ error)
//     }

// })


export const routers = router.get('/route', (req, res) => res.send('Router Working!'));


export const volunteerRouters = router.post('/become-volunteer', async (req, res) => {


    const { name, email, mobile, city, message } = req.body
    console.log(name)
    try {

        const check = await volunteerData.findOne({ email })
        if (check) {
            return res.json({
                error: "Email is already Exist"
            })
        }
        const volunteerDatas = new volunteerData({
            name: name, email: email, mobile: mobile, city: city, message: message
        })

        const storeVolunteerDatas = await volunteerDatas.save()

        return res.json(storeVolunteerDatas)

    }
    catch (error) {
        console.log("API ERRORS: " + error)
    }
})

export const volunteerDatasGet = router.get('/volunteer-datas-get', async (req, res) => {

  try {

    const volunteerDatas = await volunteerData.find().sort({ createdAt: -1 })
    res.json(volunteerDatas)
   
  }
  catch (error) {
    res.json({ success: false, message: error })
  }
})

export const volunteerDataDelete = router.delete("/volunteer-delete/:id", async (req, res) => {
  try {
    const { id } = req.params;

    //  Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Volunteer ID",
      });
    }

    //  Find and delete
    const deletedVolunteer = await volunteerData.findByIdAndDelete(id);

    //  If not found
    if (!deletedVolunteer) {
      return res.status(404).json({
        success: false,
        message: "Volunteer not found",
      });
    }

    //  Success response
    return res.status(200).json({
      success: true,
      message: "Volunteer deleted successfully",
      data: deletedVolunteer,
    });

  } catch (error) {
    console.error("Delete Volunteer Error:", error);

    return res.status(500).json({
      success: false,
      message: "Server error while deleting volunteer",
      error: error.message,
    });
  }
});











export const adminLogin = router.post('/adminLogin', async (req, res) => {

    const { email, password } = req.body

    console.log(email, password)

    try {

        // const check = await adminResetPassword.findOne()

        // const passwordCheck = await bcrypt.compare(password, check.password)

        const checkAdminLogin = email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASS

        if (!checkAdminLogin) {

            return res.json({ success: false, message: "Invalid email or password", token: "" })

        }
        else {

            const token = await jwt.sign(email + password, process.env.JSONWEB_SECRET)

            return res.json({ success: true, message: "login successfull ", token: token })

        }
    }

    catch (error) {
        return res.json(`Admin Login Error ${error}`)

    }
})

