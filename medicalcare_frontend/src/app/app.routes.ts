import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Patient } from './patient/patient';
import { Login } from './login/login';
import { Register } from './register/register';
import { CreatePatient } from './patient/create-patient';
import { EditPatient } from './patient/edit-patient';
import { ViewPatient } from './patient/view-patient';

export const routes: Routes = [
    {
        path: "",
        component: Home
    },
    {
        path: "Patient",
        component: Patient
    },
    {
        path: "Login",
        component: Login
    },
    {
        path: "Register",
        component: Register
    },
    {
        path: "Patient/Add",
        component: CreatePatient
    },
    {
        path: "Patient/edit",
        component: EditPatient
    },
    {
        path: "Patient/View",
        component: ViewPatient
    }
];
