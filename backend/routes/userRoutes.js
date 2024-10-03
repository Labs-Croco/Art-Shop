import express from "express";
import { createUSer, loginUser, logoutCurrentUser } from "../controllers/userController.js";

const router = express.Router()

router.route('/').post(createUSer)
router.post('/auth', loginUser)
router.post('/logout', logoutCurrentUser)

export default router;

