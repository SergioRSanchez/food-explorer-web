import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Detail } from '../pages/Detail';
import { NewMeal } from '../pages/NewMeal';
import { EditMeal } from '../pages/EditMeal';

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/details/:id' element={<Detail />} />
      <Route path='/new' element={<NewMeal />} />
      <Route path='/edit/:id' element={<EditMeal />} />
    </Routes>
  )
}