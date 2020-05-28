import { CHANGE_DESC_INPUT } from "../actions/descriptionActions";

export const DESC_INITIAL_STATE = '';

export const description = (state = DESC_INITIAL_STATE, action: { type: string, payload: string }) => {
    switch (action.type) {
        case CHANGE_DESC_INPUT: return action.payload;
        default: return state
    }
}