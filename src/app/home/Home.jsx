import { Link } from 'react-router'
import Form from './components/Form'
import { useName } from '../../hooks/useName'
import { CLEARNAME } from '../../providers/NameProvider'
import './Home.css'

function Home () {
  const [state, dispatch] = useName()
  return (
    <div className='home'>
      <div className='home__container'>
        <h1>POKÉDEX</h1>
        {state.name ? (<>
          <h2>Hola de nuevo, {state.name}</h2>
          <Link to='/pokedex' className='home__link'>
            Ir a la Pokédex
          </Link>{' '}
          <span>o</span>{' '}
          <button
            className='home__button'
            onClick={() => dispatch({ type: CLEARNAME })}
          >
            Salir
          </button>
        </>) : (<>
          <h2>¡Hola entranador!</h2>
          <p>Para poder comenzar, dame un nombre</p>
          <Form />
        </>)}

      </div>
    </div>
  )
}
export default Home