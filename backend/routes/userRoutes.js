import express from "express";
import { createUSer } from "../controllers/userController.js";

const router = express.Router()

router.route('/').post(createUSer)

export default router;

