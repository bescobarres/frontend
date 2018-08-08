import { TipoVehiculoEnum } from "./TipoVehiculoEnum";

export class VehiculoDTO{
    public vehiculoId:number;
    public tipoVehiculo:TipoVehiculoEnum;
    public placa:string;
    public cilindraje:number;
}