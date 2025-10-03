import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {RegisterComponent } from './register/register.component';
//import { SummaryComponent } from './summary/summary.component';
import { TravelCarbonFootprintComponent } from './travel-carbon-footprint/travel-carbon-footprint.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './services/auth-guard.service';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // default redirect to the home page
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'summary', component: TravelCarbonFootprintComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/home' } // fallback for unknow route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
