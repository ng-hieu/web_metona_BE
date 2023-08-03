import { Request, Response } from "express";
import { decode } from "punycode";
import * as bcrypt from "bcrypt";
import userService from "../service/userService";
class UserController {
    findBillByPhoneNumber = async (req: Request, res: Response) => {
        try {
            let bills =await userService.findBillByPhoneNumber(req.body.phoneNumber);
            res.status(200).json({
                success: true,
                data: bills,
            });
        } catch (e) {
            console.log(" error in findBillByPhoneNumber", e);
            res.status(500).json({
                message: "error you are anonymous",
                success: false,
            });
        }
    };
}
