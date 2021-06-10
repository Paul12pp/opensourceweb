import { InjectionToken } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export const ROUTE_PARAM_TOKEN = new InjectionToken<Observable<string>>(
    'Stream of route param from activated route'
);
// if you want to get :id from route, declare this token
export const PARAM_KEY_ID = new InjectionToken<string>(
    'static string for :id param key',
    // this is the second argument of InjectionToken constructor
    // to produce the value, like when you use useFactory
    {
        factory: () => {
            return 'id';
        }
    }
);
// if you want to get :someId from the route, the token should look like this
export const PARAM_KEY_SOME_ID = new InjectionToken<string>(
    'static string for :someId param key', {
    factory: () => {
        return 'someId';
    }
}
);
export function routeParamFactory(
    route: ActivatedRoute,
    paramKey: string
): Observable<string> {
    // should use paramMap because route.params will be deprecated soon
    return route.paramMap.pipe(map((param) => param.get(paramKey)));
}