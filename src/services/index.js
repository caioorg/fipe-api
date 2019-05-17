import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://parallelum.com.br/fipe/api/v1/carros',
  method: 'get'
})

const getBrand = () => {
  return instance({
    url: '/marcas'
  }).then(resp => resp)
}

const getModelCar = id => {
  return instance({
    url: `/marcas/${id}/modelos`
  }).then(resp => resp)
}

const getYearCar = (model, id) => {
  return instance({
    url: `/marcas/${model}/modelos/${id}/anos`
  }).then(resp => resp)
}

const detailsCar = (model, id, year) => {
  return instance({
    url: `/marcas/${model}/modelos/${id}/anos/${year}`
  }).then(resp => resp)
}

export default {
  getBrand,
  getModelCar,
  getYearCar,
  detailsCar
}
