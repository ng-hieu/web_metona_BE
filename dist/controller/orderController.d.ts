import { Request, Response } from "express";
declare class OrderController {
    getAllOrder: (req: Request, res: Response) => Promise<void>;
    getOne: (req: Request, res: Response) => Promise<void>;
    deleteOrderById: (req: Request, res: Response) => Promise<void>;
}
declare const _default: OrderController;
export default _default;
