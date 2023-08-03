import { Pay } from './../entity/pay';
import { Request, Response } from "express";
import payService from 'src/service/payService';
class PayController {
    findPayById = async (req: Request, res: Response) => {
        try {
            let pay = await payService.findOneByIdPay(
                req.params.idPay
            );
            res.status(200).json({
                success: true,
                data: pay,
            });
        } catch (e) {
            console.log(" error in findPayById", e);
            res.status(500).json({
                message: "error you are anonymous",
                success: false,
            });
        }
    };
}
export default new PayController();
