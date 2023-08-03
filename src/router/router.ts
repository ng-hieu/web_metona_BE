import { Router } from "express";
import productRouter from "./productRouter";
import categoryRouter from "./categoryRouter";
import orderRouter from "./orderRouter";
import adminRouter from "./admimRouter";
import userRouter from "./userRouter";
import payRouter from "./payRouter";

const router = Router();
router.use('product',productRouter);
router.use('/category', categoryRouter);
router.use('/adminManage', adminRouter);
router.use('/user', userRouter);
router.use("/orders", orderRouter);
router.use("/pays", payRouter);

export default router;