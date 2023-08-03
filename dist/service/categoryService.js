"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const categogy_1 = require("../entity/categogy");
const data_source_1 = require("../data-source");
class CategoryService {
    constructor() {
        this.getAllCategory = async () => {
            let categories = await this.categoryRepository.find();
            return categories;
        };
        this.addCategory = async (nameCategory) => {
            await this.categoryRepository.save(nameCategory);
        };
        this.removeCategory = async (idCategory) => {
            await this.categoryRepository.delete({ idCategory: idCategory });
        };
        this.categoryRepository = data_source_1.AppDataSource.getRepository(categogy_1.Category);
    }
}
exports.default = new CategoryService();
//# sourceMappingURL=categoryService.js.map