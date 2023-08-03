
import { Category } from "../entity/categogy";
import {AppDataSource} from "../data-source";

class CategoryService {
    private categoryRepository;

    constructor() {
        this.categoryRepository = AppDataSource.getRepository(Category);
    }

    getAllCategory = async () => {
        let categories = await this.categoryRepository.find();
        return categories;
    }
    addCategory = async (nameCategory) => {
        await this.categoryRepository.save(nameCategory);
    }
    removeCategory = async (idCategory) => {
        await this.categoryRepository.delete({idCategory: idCategory});
    }

}

export default new CategoryService();