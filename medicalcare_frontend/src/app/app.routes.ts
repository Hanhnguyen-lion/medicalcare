import { Routes } from '@angular/router';
import { Home } from './home/home';
import { AuthGuard } from './helpers/auth-guard';
import { Login } from './account/login';
import { Register } from './account/register';
import { ForgotPassword } from './account/forgot-password';

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
    { path: '**', redirectTo: '' }
];
