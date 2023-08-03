import { Request, Response } from "express";
declare class CategoryController {
    private categoryService;
    constructor();
    findAllCategory: (req: Request, res: Response) => Promise<void>;
    addCategory: (req: Request, res: Response) => Promise<void>;
    removeCategory: (req: Request, res: Response) => Promise<void>;
}
declare const _default: CategoryController;
export default _default;
