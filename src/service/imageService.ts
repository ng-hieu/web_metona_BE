import {AppDataSource} from "../data-source";
import {Image} from "../entity/image";

class ImageService{
    private imageRepository
    constructor() {
        this.imageRepository = AppDataSource.getRepository(Image)
    }
    addImage = async (id, data)=>{
        await data.forEach(item=>{
            this.imageRepository.save({product:id,imageURL:`${item}`})
        })
    }
    deleteImage = async (idImage)=>{
        await this.imageRepository.delete({product:idImage})
    }
    updateImage = async (data,id)=>{
        await  this.deleteImage(id)
        await this.addImage(id,data)
    }

}
export default new ImageService()