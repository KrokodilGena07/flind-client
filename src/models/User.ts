export interface User {
    id: string;
    email: string | null;
    phone: string | null;
    isActivated: boolean;
}