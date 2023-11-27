import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Destiny } from '../pages/Destiny'


export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destino" element={<Destiny />} />
    </Routes>
  )
}