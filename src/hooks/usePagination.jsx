import { useEffect, useState } from 'react'

export function usePagination (arr = [], itemsPerPage = 5) {
  const [page, setPage] = useState(1)

  useEffect(() => {
    setPage(1)
  }, [arr])

  const totalPages = Math.ceil(arr.length / itemsPerPage)

  const prev = () => setPage(page - 1)
  const next = () => setPage(page + 1)

  const pageItems = arr.slice((page - 1) * itemsPerPage, page * itemsPerPage)

  return {
    page,
    totalPages,
    prev,
    next,
    pageItems,
    itemsPerPage
  }
}