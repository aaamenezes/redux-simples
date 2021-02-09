import React from 'react'
import './card.css'

function getColors(props) {
  if (props.red) return 'red'
  if (props.green) return 'green'
  if (props.blue) return 'blue'
  if (props.blue) return 'blue'
  if (props.purple) return 'purple'
  return ''
}

export default props => {

  return (
    <div className={`card ${getColors(props)}`}>
      <div className="header">
        <span className="title">{props.title}</span>
      </div>
      <div className="content">
        {props.children}
      </div>
    </div>
  )
}