import { IAdmin } from "./admin.model";

export interface IStudent {

    id: number;
    studentCode: string;
    firstName: string;
    middleName: string;
    lastName: string;
    gender: string;
    age: number;
    birthdate: string;
    createdOn: string;
    admin: IAdmin;

}