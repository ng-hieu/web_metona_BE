import { AppDataSource } from "../data-source";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { SECRET } from "../middleware/auth";
import { Admin } from "../entity/admin";

class AdminService {
    private AccountRepository = AppDataSource.getRepository(Admin);
    loginCheck = async (admin) => {
        let foundAdmin = await this.AccountRepository.findOne({
            where: {
                email: admin.email,
            },
        });
        // console.log("foundUser:", foundUser)
        if (foundAdmin) {
            let pass = await bcrypt.compare(
                admin.password,
                foundAdmin.password
            );
            if (pass) {
                let payload = {
                    id: foundAdmin.adminId,
                    email: foundAdmin.email,
                };
                return {
                    info: {
                        email: foundAdmin.email,
                        name: foundAdmin.name,
                    },
                    token: jwt.sign(payload, SECRET, {
                        expiresIn: "1h",
                    }),
                };
            }
            return null;
        }
        throw new Error("Email not found");
    };
}
export default new AdminService();
