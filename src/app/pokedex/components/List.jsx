import { Link } from 'react-router'
import { usePagination } from '../../../hooks/usePagination'
import Item from './Item'
import Pagination from '../../../components/commons/Pagination'
import './List.css'

function List ({ pokemons }) {
  const {
    pageItems,
    page,
    totalPages,
    next,
    prev,
    itemsPerPage
  } = usePagination(pokemons, 20)

  return (
    <div className='list'>
      <div className='list__container'>
        <div className='list__content'>
          {pageItems.map((pokemon) => (
            <Link key={pokemon.name} to={`/pokedex/${pokemon.name}`}>
              <Item url={pokemon.url} />
            </Link>
          ))}
        </div>

        {pageItems.length === 0 && <p className='list__empty'>No hay pokémon que coincidan con tu búsqueda</p>}

        {itemsPerPage < pokemons.length && (
          <Pagination
            page={page}
            totalPages={totalPages}
            prev={prev}
            next={next}
          />
        )}
      </div>

    </div>
  )
}
export default List