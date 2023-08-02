declare class ImageService {
    private imageRepository;
    constructor();
    addImage: (id: any, data: any) => Promise<void>;
    deleteImage: (idImage: any) => Promise<void>;
    updateImage: (data: any, id: any) => Promise<void>;
}
declare const _default: ImageService;
export default _default;
