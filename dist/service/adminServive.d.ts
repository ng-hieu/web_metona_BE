declare class AdminService {
    private AccountRepository;
    loginCheck: (admin: any) => Promise<{
        info: {
            email: string;
            name: string;
        };
        token: any;
    }>;
    createAdmin: (user: any) => Promise<void>;
}
declare const _default: AdminService;
export default _default;
