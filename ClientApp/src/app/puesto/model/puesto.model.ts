export interface PuestoModel {
    id: number;
    nombre: string;
    nivel_Riesgo: string;
    nivel_Mi_Salarial: number;
    nivel_Ma_Salarial: number;
    estado: boolean;
    departamentoId: number;
}

export interface DepartamentoModel {
    id: number;
    descripcion: string;
}
