declare class CategoryService {
    private categoryRepository;
    constructor();
    getAllCategory: () => Promise<any>;
    addCategory: (nameCategory: any) => Promise<void>;
    removeCategory: (idCategory: any) => Promise<void>;
}
declare const _default: CategoryService;
export default _default;
