export interface CandidatoModel {
    id: number;
    cedula: string;
    nombre: string;
    puestoId: number;
    departamentoId: number;
    salario_Asp: number;
    competencias: string;
    recomendado_p: string;
}
export interface CandidatoInputDto {
    candidato: CandidatoModel;
    experiencia: ExperienciaModel[];
    capacitacion: CapacitacionModel[];
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

export interface EstadoInputDto{
    id:number;
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
export interface SearchCandidatoInputDto{
    nombre:string;
    puesto:number;
    competencia:string;
    salarioD:number;
    salarioH:number;
}