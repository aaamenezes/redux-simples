import React from 'react'
import { connect } from 'react-redux'
import './intervalo.css'
import Card from './Card'

import { alterarNumeroMinimo, alterarNumeroMaximo } from '../store/actions/numeros'

function Intervalo(props) {

  const { min, max } = props

  console.log(props)

  return (
    <Card title="Intervalo de números" red>
      <div className="intervalo">
        <span>
          <strong>Mínimo</strong>
          <input type="number" value={min} onChange={event => props.alterarMinimo(+event.target.value)} />
        </span>
        <span>
          <strong>Máximo</strong>
          <input type="number" value={max} onChange={event => props.alterarMaximo(+event.target.value)} />
        </span>
      </div>
    </Card>
  )
}

function mapDispatchToProps(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max
  }
}

function mapActionCreatorsToProps(dispatch) {
  return {
    alterarMinimo(novoNumero) {
      // Action Creator => action
      const action = alterarNumeroMinimo(novoNumero)
      dispatch(action)
    },
    alterarMaximo(novoNumero) {
      // Action Creator => action
      const action = alterarNumeroMaximo(novoNumero)
      dispatch(action)
    }
  }
}

export default connect(
  mapDispatchToProps,
  mapActionCreatorsToProps
)(Intervalo)