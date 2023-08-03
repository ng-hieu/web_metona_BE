import { Router } from "express";
import userController from "../controller/userController";
const userRouter = Router();
userRouter.get("/user/bill", userController.findBillByPhoneNumber);
export default userRouter;