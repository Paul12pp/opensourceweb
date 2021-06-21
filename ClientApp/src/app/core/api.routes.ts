import { getBaseUrl } from 'src/main';

export const apiRoutes = {
    idioma: {
        get: 'api/idioma/get',
        post: 'api/idioma/post',
        edit: 'api/idioma/edit',
    },
    competencia: {
        get: 'api/competencia/get',
        post: 'api/competencia/post',
        edit: 'api/competencia/edit',
    },
    puesto: {
        get: 'api/puesto/get',
        getdpt: 'api/puesto/getdpt',
        post: 'api/puesto/post',
        edit: 'api/puesto/edit',
    },
    empleado: {
        get: 'api/empleado/get',
        post: 'api/empleado/post',
        edit: 'api/empleado/edit',
        search: 'api/empleado/search'
    },
    candidato: {
        get: 'api/candidato/get',
        getbypuestos: 'api/candidato/getbypuestos',
        getbycedula: 'api/candidato/getbycedula',
        getexpbycandidato: 'api/candidato/getexpbycandidato',
        getcapbycandidato: 'api/candidato/getcapbycandidato',
        post: 'api/candidato/post',
        postexp: 'api/candidato/postexp',
        postcap: 'api/candidato/postcap',
        edit: 'api/candidato/edit',
        delete: 'api/candidato/delete',
        aprobar: 'api/candidato/aprobar',
        rechazar: 'api/candidato/rechazar',
        search:'api/candidato/search'
    }
};

export function getRoute(path: string): string {
    return getBaseUrl() + path;
}
