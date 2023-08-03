"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const bcrypt = __importStar(require("bcrypt"));
const jwt = __importStar(require("jsonwebtoken"));
const auth_1 = require("../middleware/auth");
const admin_1 = require("../entity/admin");
class AdminService {
    constructor() {
        this.AccountRepository = data_source_1.AppDataSource.getRepository(admin_1.Admin);
        this.loginCheck = async (admin) => {
            let foundAdmin = await this.AccountRepository.findOne({
                where: {
                    email: admin.email,
                },
            });
            if (foundAdmin) {
                let pass = await bcrypt.compare(admin.password, foundAdmin.password);
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
                        token: jwt.sign(payload, auth_1.SECRET, {
                            expiresIn: "1h",
                        }),
                    };
                }
                return null;
            }
            throw new Error("Email not found");
        };
        this.createAdmin = async (user) => {
            let hashedPassword = bcrypt.hashSync(user.password, 10);
            user.password = hashedPassword;
            await this.AccountRepository.save(user);
        };
    }
}
exports.default = new AdminService();
//# sourceMappingURL=adminServive.js.map