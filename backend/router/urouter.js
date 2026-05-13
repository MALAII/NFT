import express from "express";

import dotenv from "dotenv";
import mongoose from "mongoose";
import { volunteerData } from "../datamodel/duser.js";

import jwt from "jsonwebtoken";

dotenv.config();

const router = express.Router();

export const routers = router.get(
  "/route",
  (req, res) => res.send("Router Working!")
);



/* VOLUNTEER POST */

export const volunteerRouters = router.post(
  "/become-volunteer",
  async (req, res) => {

    try {

      const { name, email, mobile, city, message } = req.body;

      console.log("Volunteer Request:", req.body);

      const check = await volunteerData.findOne({ email });

      if (check) {

        return res.json({
          success: false,
          message: "Email already exists"
        });

      }

      const volunteerDatas = new volunteerData({
        name,
        email,
        mobile,
        city,
        message
      });

      const savedVolunteer = await volunteerDatas.save();

      console.log("Saved Volunteer:", savedVolunteer);

      return res.json({
        success: true,
        message: "Volunteer submitted successfully",
        data: savedVolunteer
      });

    } catch (error) {

      console.log("Volunteer API Error:", error);

      return res.status(500).json({
        success: false,
        message: error.message
      });
    }
});



/* GET VOLUNTEERS */

export const volunteerDatasGet = router.get(
  "/volunteer-datas-get",
  async (req, res) => {

    try {

      const volunteerDatas = await volunteerData
        .find()
        .sort({ createdAt: -1 });

      return res.json(volunteerDatas);

    } catch (error) {

      return res.status(500).json({
        success: false,
        message: error.message
      });
    }
});



/* DELETE VOLUNTEER */

export const volunteerDataDelete = router.delete(
  "/volunteer-delete/:id",
  async (req, res) => {

    try {

      const { id } = req.params;

      if (!mongoose.Types.ObjectId.isValid(id)) {

        return res.status(400).json({
          success: false,
          message: "Invalid Volunteer ID"
        });
      }

      const deletedVolunteer =
        await volunteerData.findByIdAndDelete(id);

      if (!deletedVolunteer) {

        return res.status(404).json({
          success: false,
          message: "Volunteer not found"
        });
      }

      return res.status(200).json({
        success: true,
        message: "Volunteer deleted successfully",
        data: deletedVolunteer
      });

    } catch (error) {

      console.error("Delete Volunteer Error:", error);

      return res.status(500).json({
        success: false,
        message: error.message
      });
    }
});



/* ADMIN LOGIN */

export const adminLogin = router.post(
  "/adminLogin",
  async (req, res) => {

    const { email, password } = req.body;

    console.log(email, password);

    try {

      const checkAdminLogin =
        email === process.env.ADMIN_EMAIL &&
        password === process.env.ADMIN_PASS;

      if (!checkAdminLogin) {

        return res.json({
          success: false,
          message: "Invalid email or password",
          token: ""
        });

      } else {

        const token = await jwt.sign(
          email + password,
          process.env.JSONWEB_SECRET
        );

        return res.json({
          success: true,
          message: "login successful",
          token: token
        });
      }

    } catch (error) {

      return res.json({
        success: false,
        message: `Admin Login Error ${error}`
      });
    }
});