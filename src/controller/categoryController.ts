import {Request, Response} from "express";
import categoryService from "src/service/categoryService";


class CategoryController {
    private productService;
    private categoryService;

    constructor() {
        this.categoryService = categoryService;
    }

    findAll = async (req: Request, res: Response) => {
        let listProduct = await this.productService.getAll();
        res.render('index', {products: listProduct});
    }

    findAllCategory = async (req: Request, res: Response) => {
        let listCategory = await categoryService.getAllCategory();
        res.status(200).json(listCategory)
    }

}

export default new CategoryController();