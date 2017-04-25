import {PUSH_ROUTE_SUCCESS} from "./ActionTypes";

export const pushRoute = (routes) => {
    return dispatch => {
        if (routes) {
            return pushRouteSuccess(routes);
        }
    };
};
export const pushRouteSuccess = (routes) => {
    return {
        type: "PUSH_ROUTE_SUCCESS",
        payload: routes
    }
};