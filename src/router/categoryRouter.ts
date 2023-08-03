import { Router } from "express";
import categoryController from "../controller/categoryController";

const categoryRouter = Router();

categoryRouter.get('/', categoryController.findAllCategory);
categoryRouter.post('/', categoryController.addCategory);
categoryRouter.delete('/:id', categoryController.removeCategory);
export default categoryRouter;