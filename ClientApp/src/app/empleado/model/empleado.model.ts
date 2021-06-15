export interface EmpleadoModel {
    id: number;
    cedula: string;
    nombre: string;
    fecha_Ing: string;
    departamentoId: number;
    puesto: string;
    salario_M: number;
    estado: boolean;
}
export interface SearchEmpleadoInputModel {
    desde: string;
    hasta: string;
}
