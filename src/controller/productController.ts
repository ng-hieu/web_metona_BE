import {Request, Response} from "express";
import productService from "src/service/productService";
class ProductController{
    constructor(){
    }
    findAll = async (req:Request, res:Response)=>{
        const page = +req.query.page || 1;
        const pageSize = req.query.pageSize || 10;
        const result = await productService.getAll(page,pageSize,true);
        res.status(200).json(result);
    }

    addProduct = async (req:Request, res:Response)=>{
        await productService.add(req.body);
        if(!req.body.name){
            res.status(400).json({
                message: 'name missing'
            })
            res.end();
        } else {
            res.status(201).json({
                message: 'OK'
            })
        }
    }

    remove = async (req:Request, res:Response)=>{
        let id = req.params.id
        await productService.remove(id);
        res.status(200).json({
            message: 'Delete success'
        })
    }
}