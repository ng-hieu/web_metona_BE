"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const image_1 = require("../entity/image");
class ImageService {
    constructor() {
        this.addImage = async (id, data) => {
            await data.forEach(item => {
                this.imageRepository.save({ product: id, imageURL: `${item}` });
            });
        };
        this.deleteImage = async (idImage) => {
            await this.imageRepository.delete({ product: idImage });
        };
        this.updateImage = async (data, id) => {
            await this.deleteImage(id);
            await this.addImage(id, data);
        };
        this.imageRepository = data_source_1.AppDataSource.getRepository(image_1.Image);
    }
}
exports.default = new ImageService();
//# sourceMappingURL=imageService.js.map