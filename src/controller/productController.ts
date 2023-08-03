import { Request, Response } from "express";
import productService from "../service/productService";
class ProductController {

    findAll = async (req: Request, res: Response) => {
        try {
            const page = +req.query.page || 1;
            const pageSize = req.query.pageSize || 10;
            const result = await productService.getAll(page, pageSize, true);
            res.status(200).json(result);
        } catch (e) {
            console.log("error in findAll:", e)
            res.status(500).json({
                message: 'error in findAll',
                success: false
            })
        }
    }
   

    addProduct = async (req: Request, res: Response) => {
        try {
            const productName = req.body.productName;
            const product = await productService.findProductByName(productName);
            if (product) {
                res.status(400).json({
                    message: 'Product name already exists'
                });
                return;
            }
            await productService.add(req.body);
            res.status(201).json({
                message: 'OK'
            });
        } catch (e) {
            console.log("error in addProduct:", e);
            res.status(500).json({
                message: 'Error in addProduct',
                success: false
            });
        }
    }
    
    editProduct = async (req: Request, res: Response) => {
        try {
            let id = req.params.id;
            let product = req.body;
            await productService.editProduct(id, product);
            res.status(200).json({ message: "edit successfully" })
        } catch (e) {
            console.log("error in editProduct:", e)
            res.status(500).json({
                message: 'error in editProduct',
                success: false
            })
        }
    }

    remove = async (req: Request, res: Response) => {
        try {
            let id = req.params.id
            await productService.remove(id);
            res.status(200).json({
                message: 'Delete success'
            })
        } catch (e) {
            console.log("error in removeProduct:", e)
            res.status(500).json({
                message: 'error in removeProduct',
                success: false
            })
        }
    }
}
export default new ProductController();