import { Component, OnInit } from '@angular/core';
import { FacturaService } from '../_service/factura/FacturaService';
import { ResponseDTO } from '../_dto/ResponseDTO';
import { FacturaDTO } from '../_dto/FacturaDTO';
import { VehiculoDTO } from '../_dto/VehiculoDTO';
import { TipoVehiculoEnum } from '../_dto/TipoVehiculoEnum';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-lista-vehiculos',
  templateUrl: './lista-vehiculos.component.html',
  styleUrls: ['./lista-vehiculos.component.scss']
})
export class ListaVehiculosComponent implements OnInit {

  responseDTO: ResponseDTO;
  listaFacturas: FacturaDTO[] = [];
  listaFacturasCarros: FacturaDTO[] = [];
  listaFacturasMotos: FacturaDTO[] = [];
  vehiculo: VehiculoDTO;
  constructor(private facturaService: FacturaService) { }

  ngOnInit() {
    this.obtenerListaFacturas();
  }

  obtenerListaFacturas() {
    this.facturaService.obtenerListaFacturas().subscribe(response => {
      this.responseDTO = response;
      this.listaFacturas = response.data;
      console.log(JSON.stringify(this.listaFacturas));
      this.listaFacturas.forEach(factura => {
        this.vehiculo = factura.vehiculo;
        console.log('Vehiculo ' + this.vehiculo.tipoVehiculo);
        if (this.vehiculo.tipoVehiculo === TipoVehiculoEnum.Carro) {
          this.listaFacturasCarros.push(factura);
        } else {
          this.listaFacturasMotos.push(factura);
        }
        console.log('Carros ' + JSON.stringify(this.listaFacturasCarros));
        console.log('Motos ' + JSON.stringify(this.listaFacturasMotos));
      });
    });
  }

  mostrarListaFacturasConCarros() {
  }

  obtenerListaFacturasConMotos() {

  }

}
