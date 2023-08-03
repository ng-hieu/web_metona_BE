import { Request, Response } from "express";
import categoryService from "../service/categoryService";
import productService from "../service/productService";


class CategoryController {
    private categoryService;

    constructor() {
        this.categoryService = categoryService;
    }


    findAllCategory = async (req: Request, res: Response) => {
        try {
            let listCategory = await categoryService.getAllCategory();
            res.status(200).json(listCategory)
        } catch (e) {
            console.log("error in get all category:", e)
            res.status(500).json({
                message: 'error in get all category',
                success: false
            })
        }
    }
    addCategory = async (req: Request, res: Response) => {
        try {
            let nameCategory = req.body
            await categoryService.addCategory(nameCategory)
            res.status(200).json({ message: "Add category" })
        } catch (e) {
            console.log("error in add category:", e)
            res.status(500).json({
                message: 'error in add category',
                success: false
            })
        }
    }
    removeCategory = async (req: Request, res: Response) => {
        try {
            await categoryService.removeCategory(req.params.id);
            res.status(201).json({
                success: true,
                data: 'delete category success!'
            });
        } catch (e) {
            console.log("error in delete row:", e)
            res.status(500).json({
                message: 'error in delete category',
                success: false
            })
        }
    }

}

export default new CategoryController();