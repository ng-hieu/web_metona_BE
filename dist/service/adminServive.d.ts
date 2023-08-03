declare class AdminService {
    private AccountRepository;
    loginCheck: (admin: any) => Promise<{
        info: {
            email: string;
            name: string;
        };
        token: any;
    }>;
}
declare const _default: AdminService;
export default _default;
