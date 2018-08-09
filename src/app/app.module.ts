import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NgTempusdominusBootstrapModule } from 'ngx-tempusdominus-bootstrap';

import { AppComponent } from './app.component';
import { ListaVehiculosComponent } from './lista-vehiculos/lista-vehiculos.component';
import { FacturaService } from './_service/factura/FacturaService';
import { HttpClientModule } from '@angular/common/http';
import { Config } from './Config';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IngresoFacturaComponent } from './ingreso-factura/ingreso-factura.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaVehiculosComponent,
    HeaderComponent,
    FooterComponent,
    IngresoFacturaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    NgTempusdominusBootstrapModule,
    HttpClientModule
  ],
  providers: [
    FacturaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
