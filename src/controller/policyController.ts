import { Request, Response } from "express";
import PolicyService from "../service/policy";

class PolicyController {
    showPolicy = async (req: Request, res: Response) => {
        try {
            let policy = await PolicyService.getPolicy();
            res.status(200).json({
                success: true,
                data: policy,
            });
        } catch (e) {
            console.log(" error in PolicyController", e);
            res.status(500).json({
                message: "error you are anonymous",
                success: false,
            });
        }
    };

    addPolicy = async (req: Request, res: Response) => {
        try {
            let policy = await PolicyService.addPolicy(req.body);
            res.status(200).json({
                success: true,
                data: policy,
            });
        } catch (e) {
            console.log(" error in addPolicy", e);
            res.status(500).json({
                message: "error you are anonymous",
                success: false,
            });
        }
    };
}
export default new PolicyController();
