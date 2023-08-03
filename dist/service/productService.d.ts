declare class ProductService {
    private productRepository;
    constructor();
    getAll: (page: any, pageSize: any, getTotalCount?: boolean) => Promise<{
        products: any;
        totalCount: any;
        totalPages: number;
    } | {
        products: any;
        totalPages: number;
        totalCount?: undefined;
    }>;
    add: (product: any) => Promise<void>;
    editProduct: (id: any, product: any) => Promise<any>;
    remove: (id: any) => Promise<void>;
    findProductByName: (name: any) => Promise<any>;
}
declare const _default: ProductService;
export default _default;
