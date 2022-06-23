import express from "express";
import { uploadImages, listImages } from "../controllers/upload";
import { authUser } from "../middleware/auth";
import imageUpload from "../middleware/imageUpload";

const router = express.Router();

router.post("/uploadImages", authUser, imageUpload, uploadImages);
router.post("/listImages", authUser, listImages);

export default router;