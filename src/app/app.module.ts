import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
<<<<<<< HEAD
import { ContainerSaleCarComponent } from './container-sale-car/container-sale-car.component';
import { ContainerServExperienceComponent } from './container-serv-experience/container-serv-experience.component';
=======
import { ContentComponent } from './content/content.component';
import { BookingComponent } from './booking/booking.component';
import { HomeComponent } from './pages/home/home.component';

>>>>>>> 292b1d6ad8a0f5462d62e01775eaf799243c54f6

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    ContainerSaleCarComponent,
    ContainerServExperienceComponent
=======
   ContentComponent,
   BookingComponent,
   HomeComponent
    
>>>>>>> 292b1d6ad8a0f5462d62e01775eaf799243c54f6
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
