import { Home, ModelCar, YearCar, DetailsCar } from '../pages'

const routes = [
  {
    exact: true,
    path: '/',
    component: Home,
    key: 'home'
  },
  {
    exact: false,
    path: '/modelo',
    component: ModelCar,
    key: 'modelo'
  },
  {
    exact: false,
    path: '/ano',
    component: YearCar,
    key: 'ano'
  },
  {
    exact: false,
    path: '/detalhes',
    component: DetailsCar,
    key: 'detalhes'
  }
]

export default routes
