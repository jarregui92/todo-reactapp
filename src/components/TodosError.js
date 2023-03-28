import React from 'react'
import '../css/TodosError.css'

function TodosError({error}) {
  return <p className="error">{error}</p>
}

export {TodosError}