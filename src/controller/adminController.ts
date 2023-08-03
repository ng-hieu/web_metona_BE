import { Request, Response } from "express";
import adminServive from "../service/adminServive";
class AdminController {
    checkLogin = async (req: Request, res: Response) => {
        try {
            let admin = await adminServive.loginCheck(req.body);

            if (admin) {
                res.status(200).json({
                    success: true,
                    data: admin.info,
                });
            } else {
                throw new Error("Wrong email or password");
            }
        } catch (e) {
            console.log(" error in login ", e);
            res.status(500).json({
                message: "error in login",
                success: false,
            });
        }
    };
}
export default new AdminController();