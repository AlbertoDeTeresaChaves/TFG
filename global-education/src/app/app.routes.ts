import { Routes } from '@angular/router';
import { LoginComponent } from './components/autenticacion/login/login.component';
import { RegisterComponent } from './components/autenticacion/register/register.component';
import { AutenticacionContainerComponent } from './components/autenticacion/autenticacion-container/autenticacion-container.component';
import { HomeContainerComponent } from './components/screen-container/home-container/home-container.component';
import { ScreenWrapperComponent } from './components/screen-container/screen-wrapper/screen-wrapper.component';
import { NumerosNaturalesStepperComponent } from './components/tests/math/numeros-naturales-container/numeros-naturales-stepper/numeros-naturales-stepper.component';
import { OpNumerosNaturalesStepperComponent } from './components/tests/math/op-numeros-naturales-container/op-numeros-naturales-stepper/op-numeros-naturales-stepper.component';
import { TeoriaNumerosStepperComponent } from './components/tests/math/teoria-numeros-container/teoria-numeros-stepper/teoria-numeros-stepper.component';
import { EnterosStepperComponent } from './components/tests/math/enteros-container/enteros-stepper/enteros-stepper.component';
import { TestWrapperComponent } from './components/tests/test-wrapper/test-wrapper.component';
import { VocabularyStepperComponent } from './components/tests/english/vocabulary-container/vocabulary-stepper/vocabulary-stepper.component';
import { GrammarStepperComponent } from './components/tests/english/grammar-container/grammar-stepper/grammar-stepper.component';
import { WritingStepperComponent } from './components/tests/english/writing-container/writing-stepper/writing-stepper.component';
import { ComprehensionStepperComponent } from './components/tests/english/comprehension-container/comprehension-stepper/comprehension-stepper.component';

export const routes: Routes = [
    {
        path: 'auth',
        component: AutenticacionContainerComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            { path: '', redirectTo: 'login', pathMatch: 'full' }
        ]
    },
    {
        path: 'GlobalEducation',
        component: ScreenWrapperComponent,
        children: [
            { path: 'home', component: HomeContainerComponent },
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            {
                path: 'math',
                component: TestWrapperComponent,
                children: [
                    { path: 'NumerosNaturales', component: NumerosNaturalesStepperComponent },
                    { path: 'OpNumerosNaturales', component: OpNumerosNaturalesStepperComponent },
                    { path: 'TeoriaNumeros', component: TeoriaNumerosStepperComponent },
                    { path: 'Enteros', component: EnterosStepperComponent }
                ]
            },
            {
                path: 'english',
                component: TestWrapperComponent,
                children: [
                    { path: 'Vocabulary', component: VocabularyStepperComponent },
                    { path: 'Grammar', component: GrammarStepperComponent },
                    { path: 'Writing', component: WritingStepperComponent },
                    { path: 'Comprehension', component: ComprehensionStepperComponent }
                ]
            }
        ]
    },
    { path: '', redirectTo: 'auth/login', pathMatch: 'full' }
];
