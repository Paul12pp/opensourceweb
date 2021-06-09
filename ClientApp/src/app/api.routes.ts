import { getBaseUrl } from 'src/main';

export const apiRoutes = {
    idioma: {
        get: 'get',
        post: 'post',
        edit: 'edit',
    },
    competencia: {
        get: 'get',
        post: 'post',
        edit: 'edit',
    },
    puesto: {
        get: 'get',
        getdpt: 'getdpt',
        post: 'post',
        edit: 'edit',
    },
    empleado: {
        get: 'get',
        post: 'post',
        edit: 'edit',
        search: 'search'
    },
    candidato: {
        get: 'get',
        getbypuestos: 'getbypuestos',
        getbycedula: 'getbycedula',
        getexpbycandidato: 'getexpbycandidato',
        getcapbycandidato: 'getcapbycandidato',
        post: 'post',
        postexp: 'postexp',
        postcap: 'postcap',
        edit: 'edit',
        delete: 'delete',
        aprobar: 'aprobar',
        rechazar: 'rechazar'
    }
};

export function getRoute(path: string): string {
    return getBaseUrl() + 'api/' + path;
}
