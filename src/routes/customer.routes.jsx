import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Detail } from '../pages/Detail';
import { NotFound } from '../pages/NotFound';

export function CustomerRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/details/:id' element={<Detail />} />

      <Route path='*' exact={true} element={<NotFound />} />
    </Routes>
  )
}