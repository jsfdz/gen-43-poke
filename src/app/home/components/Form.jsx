import { useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import { useName } from '../../../hooks/useName'
import { SETNAME } from '../../../providers/NameProvider'

function Form () {
  const inputRef = useRef(null)
  const [error, setError] = useState(false)
  const [, dispatch] = useName()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setError(false)
    const value = inputRef.current.value
    if (value.trim() === '') {
      setError('Escribe un nombre')
      return
    }
    dispatch({ type: SETNAME, payload: value })
    navigate('/pokedex')
    inputRef.current.value = ''
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' placeholder='tu nombre...' ref={inputRef} />
      <button type='submit'>
        Comenzar
      </button>

      {error && <p className='error'>{error}</p>}
    </form>
  )
}
export default Form