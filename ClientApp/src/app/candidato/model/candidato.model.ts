export interface CandidatoModel {
    id: number;
    cedula: string;
    nombre: string;
    idPuesto: number;
    idDepartamento: number;
    salario_Asp: number;
    competencias: string;
    recomendado_p: string;
    estado: boolean;
}

export interface ExperienciaModel {
    id: number;
    empresa: string;
    puesto: string;
    fecha_desde: string;
    fecha_hasta: string;
    salario: number;
    idCandidato: number;
}

export interface CapacitacionModel {
    id: number;
    descripcion: string;
    nivel: string;
    fecha_desde: string;
    fecha_hasta: string;
    institucion: string;
    idCandidato: number;
}

export interface CapacitacionInputModel {
    id: number;
    capacitaciones: CapacitacionModel[];
    competencias: string;
}
