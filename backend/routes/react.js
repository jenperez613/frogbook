import express from "express";
import { reactPost, getReacts } from "../controllers/react";
import { authUser } from "../middleware/auth";

const router = express.Router();
router.put("/reactPost", authUser, reactPost);
router.get("/getReacts/:id", authUser, getReacts);

export default router