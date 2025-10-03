import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelCarbonFootprintComponent } from './travel-carbon-footprint/travel-carbon-footprint.component';
import { ProfileComponent } from './profile/profile.component';
import { SummaryComponent } from './summary/summary.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TravelCarbonFootprintFormComponent } from './travel-carbon-footprint-form/travel-carbon-footprint-form.component';

@NgModule({
  declarations: [
    AppComponent,
    TravelCarbonFootprintComponent,
    ProfileComponent,
    SummaryComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    TravelCarbonFootprintFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
