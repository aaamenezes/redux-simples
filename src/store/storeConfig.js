import { createStore, combineReducers } from 'redux'
import numerosReducer from './reducers/numeros'

const reducers = combineReducers({
  numeros: numerosReducer,

  // Não foi movido para um arquivo separado, pois não foi utilizado na aplicação
  // Poderia ser excluído
  nomes: function(state, action) {
    return [ 'Ana', 'Bia', 'Carlos' ]
  }
})

function storeConfig() {
  return createStore(reducers)
}

export default storeConfig