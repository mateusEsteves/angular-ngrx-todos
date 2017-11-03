import {GET_TODOS, GET_TODOS_ERROR, GET_TODOS_SUCCESS} from '../actions/todos.actions';

export function todosReducer(lastState, {type, payload}) {
    switch (type) {
        case GET_TODOS:
            return Object.assign({}, lastState, {pending: true, error: false});
        case GET_TODOS_SUCCESS:
            return Object.assign({}, lastState, {data: payload, pending: false});
        case GET_TODOS_ERROR:
            return Object.assign({}, lastState, {pending: false, error: true});
        default:
            return lastState;
    }
}