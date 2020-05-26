import { combineReducers } from "redux";
import { TodoItem } from "../todo/model/TodoItem.model";

export interface GlobalState {
    todo: { list: TodoItem[] }
}

const rootReducer = combineReducers({
    todo: () => {
        return {
            list: [{
                _id: '1fsafsafw23r2afd',
                description: 'Pagar fatura do cartao',
                done: true
            }]
        }
    }
})

export default rootReducer