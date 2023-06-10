import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContainerSaleCarComponent } from './container-sale-car/container-sale-car.component';
import { ContainerServExperienceComponent } from './container-serv-experience/container-serv-experience.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerSaleCarComponent,
    ContainerServExperienceComponent
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
