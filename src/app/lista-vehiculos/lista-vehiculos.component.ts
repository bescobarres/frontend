import { Component, OnInit } from '@angular/core';
import { FacturaService } from '../_service/factura/FacturaService';
import { ResponseDTO } from '../_dto/ResponseDTO';

@Component({
  selector: 'app-lista-vehiculos',
  templateUrl: './lista-vehiculos.component.html',
  styleUrls: ['./lista-vehiculos.component.scss']
})
export class ListaVehiculosComponent implements OnInit {

  responseDTO: ResponseDTO;

  constructor(private facturaService: FacturaService) { }

  ngOnInit() {
  }

  obtenerListaFacturas() {
    this.facturaService.obtenerListaFacturas().subscribe(response => {
      this.responseDTO = response;
      console.log(JSON.stringify(this.responseDTO));
    });
  }

}
