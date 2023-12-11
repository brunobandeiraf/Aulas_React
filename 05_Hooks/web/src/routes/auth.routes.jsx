import { Routes, Route } from 'react-router-dom';

import { SignUp } from '../pages/SignUp';
import { Home } from '../pages/Home';
import { Product } from '../pages/Product';

export function AuthRoutes() {
  return (
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path="/register" element={<SignUp />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  );
}