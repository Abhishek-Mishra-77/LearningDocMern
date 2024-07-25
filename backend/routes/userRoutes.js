import express from "express";
const router = express.Router();
import { addUser, removeUser  , allUser , updateUser , getUser} from "../controllers/userControllers.js";

router.post("/add", addUser);
router.delete("/remove/:id", removeUser);
router.get("/allUser", allUser);
router.put("/update/:id", updateUser);
router.get("/getUser", getUser);

export default router;