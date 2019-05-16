import services from '../../services'

export const listBrand = event => {
  return dispatch => {
    services.getBrand().then(resp =>
      dispatch({
        type: 'LIST_BRAND',
        payload: resp.data
      })
    )
  }
}

export const modelCar = model => {
  return dispatch => {
    services.getModelCar(model).then(resp =>
      dispatch({
        type: 'LIST_MODEL_CARD',
        brand: model,
        payload: resp.data.modelos
      })
    )
  }
}

export const selectedModel = (brand, code) => {
  return dispatch => {
    services.getYearCar(brand, code).then(resp =>
      dispatch({
        type: 'SELECTED_MODEL_CARD',
        model: code,
        payload: resp.data
      })
    )
  }
}

export const detailsCar = (brand, code, year) => {
  return dispatch => {
    services.detailsCar(brand, code, year).then(resp =>
      dispatch({
        type: 'DETAIL_CAR',
        payload: resp.data
      })
    )
  }
}
