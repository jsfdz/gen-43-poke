import { useReducer } from 'react'
import { NameContext } from '../contexts/NameContext'

export const SETNAME = 'SET_NAME'
export const CLEARNAME = 'CLEAR_NAME'

const initialState = {
  name: localStorage.getItem('name') || ''
}

// {
//   type: 'Es el tipo de la acción que se va a ejecutar',
//   payload: 'Es la información que se va a enviar a la acción'
// }

function reducer (state, action) {
  switch (action.type) {
    case SETNAME:
      localStorage.setItem('name', action.payload)
      return { ...state, name: action.payload }
    case CLEARNAME:
      localStorage.removeItem('name')
      return { ...state, name: '' }
    default:
      return state
  }
}

function NameProvider ({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <NameContext.Provider value={[state, dispatch]}>
      {children}
    </NameContext.Provider>
  )
}

export default NameProvider