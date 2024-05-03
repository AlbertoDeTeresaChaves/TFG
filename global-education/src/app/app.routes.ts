import { Routes } from '@angular/router';
import { LoginComponent } from './components/autenticacion/login/login.component';
import { RegisterComponent } from './components/autenticacion/register/register.component';
import { AutenticacionContainerComponent } from './components/autenticacion/autenticacion-container/autenticacion-container.component';

export const routes: Routes = [
    {
        path: 'auth',
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            {path:'', redirectTo:'login',pathMatch:"full"}
        ],
        component: AutenticacionContainerComponent
    },
    { path: '', redirectTo: "auth/login", pathMatch: "full" }  
];
