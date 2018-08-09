import { VehiculoDTO } from './VehiculoDTO';

export class FacturaDTO {
    public facturaId: number;
    public vehiculo: VehiculoDTO;
    public fechaEntrada: Date;
    public fechaSalida: Date;
    public valorTotal: number;
}
