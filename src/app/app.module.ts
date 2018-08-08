import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaVehiculosComponent } from './lista-vehiculos/lista-vehiculos.component';
import { FacturaService } from './_service/factura/FacturaService';
import { HttpClientModule } from '@angular/common/http';
import { Config } from './Config';

@NgModule({
  declarations: [
    AppComponent,
    ListaVehiculosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    FacturaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
