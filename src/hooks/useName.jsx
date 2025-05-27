import { useContext } from 'react'
import { NameContext } from '../contexts/NameContext'

export const useName = () => useContext(NameContext)