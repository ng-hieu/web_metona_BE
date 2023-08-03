import { Request, Response } from "express";
declare class PayController {
    findPayById: (req: Request, res: Response) => Promise<void>;
}
declare const _default: PayController;
export default _default;
