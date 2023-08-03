
import { AppDataSource } from "../data-source";
import { Policy } from "../entity/policy";

class PolicyService {
    private policyRepository;

    constructor() {
        this.policyRepository = AppDataSource.getRepository(Policy);
    }

    getPolicy = async () => {
        let policy = await this.policyRepository.find();
        return policy[0];
    };
    addPolicy = async (content) => {
        await this.policyRepository.save(content);
    };
    
}

export default new PolicyService();
