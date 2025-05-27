import { useEffect } from 'react'
import axios from 'axios'
import { defaultTypeEs } from '../../../lib/utils'
import './Form.css'

function Form ({ value, onSearch, type, onType, stock, onFiltered }) {

  useEffect(() => {
    if (!type) {
      onFiltered([])
      return
    }

    axios.get(`https://pokeapi.co/api/v2/type/${type}`)
      .then(({ data }) => {
        const results = data.pokemon.map((p) => p.pokemon.name)
        onFiltered(stock.filter((p) => results.includes(p.name)))
      })
  }, [type, stock])

  return (
    <div className='form'>
      <div className='form__container'>
        <input
          type='text'
          placeholder='Buscar...'
          className='form__input'
          value={value}
          onChange={(e) => onSearch(e.target.value)}
        />

        <select
          className='form__select'
          value={type}
          onChange={(e) => onType(e.target.value)}
        >
          <option value=''>Todos</option>
          {Object.keys(defaultTypeEs).map((type) => (
            <option key={type} value={type}>
              {defaultTypeEs[type]}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
export default Form