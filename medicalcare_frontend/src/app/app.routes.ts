import { Routes } from '@angular/router';
import { Home } from './home/home';
import { AuthGuard } from './helpers/auth-guard';
import { Login } from './account/login';
import { Register } from './account/register';
import { ForgotPassword } from './account/forgot-password';
import { Patient } from './patient/patient';
import { EditPatient } from './patient/edit-patient';
import { CreatePatient } from './patient/create-patient';
import { Billing } from './billing/billing';

export const routes: Routes = [
    {
        path: "",
        component: Home,
        canActivate:[AuthGuard]
    },
    {
        path: "Account/Login",
        component: Login
    },
    {
        path: "Account/Register",
        component: Register
    },
    {
        path: "Account/Forgotpassword",
        component: ForgotPassword
    },
    {
        path: "Patient",
        component: Patient
    },
    {
        path: "Patient/Edit",
        component: EditPatient
    },
    {
        path: "Patient/Add",
        component: CreatePatient
    },
    {
        path: "Billing",
        component: Billing
    },
    { path: '**', redirectTo: '' }
];
