import { combineReducers } from "redux";
import { TodoItem } from "../todo/model/TodoItem.model";
import { description } from "../todo/reducers/descriptionReducer";
import { list } from "../todo/reducers/listReducer";

export interface GlobalState {
    list: TodoItem[],
    description: string
}

const rootReducer = combineReducers({
    list: list,
    description: description
})

export default rootReducer