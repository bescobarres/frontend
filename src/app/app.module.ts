import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ListaVehiculosComponent } from './lista-vehiculos/lista-vehiculos.component';
import { FacturaService } from './_service/factura/FacturaService';
import { HttpClientModule } from '@angular/common/http';
import { Config } from './Config';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsModule,
    ListaVehiculosComponent,
    HeaderComponent,
    FooterComponent,
    RouterModule
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
