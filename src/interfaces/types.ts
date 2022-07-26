import { Key } from 'react';

export type ValuesForm = {
    usuario: string;
    contraseña: string;
};

export type Errors = {
    usuario: string;
    contraseña: string;
};

export interface IsLoggedInValues {
    isLoggedIn: boolean;
}

export interface DataAxios {
    data: null | Welcome | any;
    loading: boolean;
    error: null | Object;
}

export interface Welcome {
    success: boolean;
    data: Data;
}

export interface Data {
    employees: Employee[];
}

export interface Employee {
    id: number | Key;
    name: string;
    last_name: string;
    birthday: number | null;
}

export interface EmployeeForm {
    name: string;
    last_name: string;
    birthday: number;
}

export interface EmployeeErrors {
    name: string;
    last_name: string;
    birthday: string | number;
}

