import { Router } from "express";
import policyController from "../controller/policyController";

const policyRouter = Router();
policyRouter.get("/", policyController.showPolicy);
policyRouter.post("/", policyController.addPolicy);
export default policyRouter;
