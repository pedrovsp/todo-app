import { combineReducers } from "redux";

const rootReducer = combineReducers({
    todo: () => ({
        description: 'Ler livro',
        list: [{
            _id: 1,
            description: 'Pagar fatura do cartao',
            done: true
        }]
    })
})

export default rootReducer