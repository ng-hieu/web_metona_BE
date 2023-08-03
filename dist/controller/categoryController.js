"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const categoryService_1 = __importDefault(require("../service/categoryService"));
class CategoryController {
    constructor() {
        this.findAllCategory = async (req, res) => {
            try {
                let listCategory = await categoryService_1.default.getAllCategory();
                res.status(200).json(listCategory);
            }
            catch (e) {
                console.log("error in get all category:", e);
                res.status(500).json({
                    message: 'error in get all category',
                    success: false
                });
            }
        };
        this.addCategory = async (req, res) => {
            try {
                let nameCategory = req.body;
                await categoryService_1.default.addCategory(nameCategory);
                res.status(200).json({ message: "Add category" });
            }
            catch (e) {
                console.log("error in add category:", e);
                res.status(500).json({
                    message: 'error in add category',
                    success: false
                });
            }
        };
        this.removeCategory = async (req, res) => {
            try {
                await categoryService_1.default.removeCategory(req.params.id);
                res.status(201).json({
                    success: true,
                    data: 'delete category success!'
                });
            }
            catch (e) {
                console.log("error in delete row:", e);
                res.status(500).json({
                    message: 'error in delete category',
                    success: false
                });
            }
        };
        this.categoryService = categoryService_1.default;
    }
}
exports.default = new CategoryController();
//# sourceMappingURL=categoryController.js.map