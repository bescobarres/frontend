import { ListaVehiculosComponent } from './lista-vehiculos/lista-vehiculos.component';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

// import { NotFoundComponent } from './pages/not-found/not-found.component';


const routes: Routes = [
      { path: 'header',      component: HeaderComponent },
      { path: 'lista-vehiculos',     component: ListaVehiculosComponent },
      { path: '',          redirectTo: 'home', pathMatch: 'full' },
      // { path: '**',        component: NotFoundComponent },
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule { }

