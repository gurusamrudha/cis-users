import { Uuid } from './uuid.model';

export interface UsersModel {
    userId?: Uuid;
    userName?: string;
    emailAddress?: string;
    phone?: number;
    age?: number;
    active?: boolean;
}
