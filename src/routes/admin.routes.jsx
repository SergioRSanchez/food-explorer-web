import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Detail } from '../pages/Detail';
import { NewMeal } from '../pages/NewMeal';
import { EditMeal } from '../pages/EditMeal';
import { NotFound } from '../pages/NotFound';

export function AdminRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/details/:id' element={<Detail />} />
      <Route path='/new' element={<NewMeal />} />
      <Route path='/edit/:id' element={<EditMeal />} />

      <Route path='*' exact={true} element={<NotFound />} />
    </Routes>
  )
}