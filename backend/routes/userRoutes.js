import express from "express";
import { 
    createUSer, 
    getAllUsers, 
    loginUser, 
    logoutCurrentUser,
    getCurrentUserProfile,
    updateCurrentUserProfile,
    deleteUserById,
    getUserById,
    updateUserById 
} from "../controllers/userController.js";
import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router()

router.route('/').post(createUSer).get(authenticate, authorizeAdmin, getAllUsers);
router.post('/auth', loginUser);
router.post('/logout', logoutCurrentUser);

router.route('/profile')
    .get(authenticate, getCurrentUserProfile)
    .put(authenticate, updateCurrentUserProfile);

//ADMIN ROUTES
router.route('/:id')
.delete(authenticate, authorizeAdmin, deleteUserById)
.get(authenticate,authorizeAdmin, getUserById)
.put(authenticate, authorizeAdmin, updateUserById)


export default router;

