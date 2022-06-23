import express from "express";
import { uploadImages, listImages } from "../controllers/upload.js";
import { authUser } from "../middleware/auth.js";
import {imageUpload} from "../middleware/imageUpload.js";

const router = express.Router();

router.post("/uploadImages", authUser, imageUpload, uploadImages);
router.post("/listImages", authUser, listImages);

export default router;