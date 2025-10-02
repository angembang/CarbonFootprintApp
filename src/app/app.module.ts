import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TravelCarbonFootprintComponent } from './travel-carbon-footprint/travel-carbon-footprint.component';

@NgModule({
  declarations: [
    AppComponent,
    TravelCarbonFootprintComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
