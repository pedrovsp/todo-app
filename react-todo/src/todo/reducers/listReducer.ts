import { TODO_SEARCH, TODO_ADD, TODO_REMOVE, TODO_EDIT } from "../actions/listActions";

export const LIST_INITIAL_STATE = [];

export const list = (state = LIST_INITIAL_STATE, action: { type: string, payload: any }) => {
    switch (action.type) {
        case TODO_SEARCH: return action.payload.data;
        case TODO_ADD: return [action.payload.data, ...state];
        case TODO_REMOVE: return action.payload.data;
        case TODO_EDIT: return [...state];
        default: return state
    }
}