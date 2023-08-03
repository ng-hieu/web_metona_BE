import { Request, Response } from "express";
declare class AdminController {
    checkLogin: (req: Request, res: Response) => Promise<void>;
    create: (req: Request, res: Response) => Promise<void>;
}
declare const _default: AdminController;
export default _default;
