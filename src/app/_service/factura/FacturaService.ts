import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResponseDTO } from '../../_dto/ResponseDTO';
import { Observable } from 'rxjs';
import { catchError, map, tap, retry } from 'rxjs/operators';
import { Config } from '../../Config';

@Injectable()
export class FacturaService {

    urlFacturaValues: any;
    urlIpHostBase: string;
    urlFacturaObtenerListaVehiculosPendiente: string;
    urlFacturaIngresarNuevoVehiculo: string;
    constructor(
        private http: HttpClient
    ) {
        this.urlIpHostBase = Config.URL_BASE + Config.URL_FACTURAS.FACTURA;
        this.urlFacturaObtenerListaVehiculosPendiente = Config.URL_FACTURAS.OBTENER_FACTURA;
        console.log('Url obtener facturas pendiente: ' + this.urlFacturaObtenerListaVehiculosPendiente);
    }

    registrarIngresoVehiculoEnFactura(): Promise<ResponseDTO[]> {
        return null;
    }

    obtenerListaFacturas() {
        const urlConsume: string = this.urlIpHostBase + this.urlFacturaObtenerListaVehiculosPendiente;
        return this.http.get<ResponseDTO>(urlConsume);
    }
}
