import { AppDataSource } from "src/data-source";
import { User } from "src/entity/user";
class UserService {
    private userRepository = AppDataSource.getRepository(User);
    findBillByPhoneNumber = async (phoneNumber) => {
        let bill = await this.userRepository.find({
            where: [{ phoneNumber: phoneNumber }],
        });
        return bill;
    };
}
export default new UserService();
