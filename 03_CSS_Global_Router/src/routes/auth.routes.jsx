import { Routes, Route } from 'react-router-dom'

import { Home } from '../pages/Home'
import { Cadastro } from '../pages/Cadastro'
import { Sobre } from '../pages/Sobre'

export function AuthRoutes() {
 return (
   <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/cadastro" element={<Cadastro />} />
     <Route path="/sobre" element={<Sobre />} />
   </Routes>
 )
}
