import { Routes, Route } from 'react-router'
import Home from '../app/home/Home'
import Pokedex from '../app/pokedex/Pokedex'
import Details from '../app/details/Details'
import Protected from './Protected'

function App () {
  return (
    <Routes>
      <Route path='/' element={<Home />} />

      <Route path='/pokedex' element={<Protected />}>
        <Route index element={<Pokedex />} />
        <Route path=':name' element={<Details />} />
      </Route>
    </Routes>
  )
}

export default App
