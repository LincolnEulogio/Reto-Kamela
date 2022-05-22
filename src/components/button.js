import React from 'react'

const button = ({isActive,clicked}) => {
  return (
    <div>
      <button onClick = {clicked} > {isActive ? "Generar Nuevo Usuario" : "Generar Usuario"} </button>
    </div>
  )
}

export default button
