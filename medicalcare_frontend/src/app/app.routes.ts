import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Patient } from './patient/patient';
import { Login } from './login/login';

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
    }
];
