import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContainerSaleCarComponent } from './container-sale-car/container-sale-car.component';
import { ContainerServExperienceComponent } from './container-serv-experience/container-serv-experience.component';
import { ContentComponent } from './content/content.component';
import { BookingComponent } from './booking/booking.component';
import { HomeComponent } from './pages/home/home.component';
import { ContainerServiceComponent } from './container-service/container-service.component';


@NgModule({
  declarations: [
    AppComponent,
    ContainerSaleCarComponent,
    ContainerServExperienceComponent,
   ContentComponent,
   BookingComponent,
   HomeComponent,
   ContainerServiceComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
