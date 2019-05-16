const initialState = {
  listBrand: [],
  listModel: [],
  listYears: [],
  brand: '',
  model: '',
  year: '',
  details: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LIST_BRAND':
      return {
        ...state,
        listBrand: action.payload
      }
    case 'LIST_MODEL_CARD':
      return {
        ...state,
        brand: action.brand,
        listModel: action.payload
      }
    case 'SELECTED_MODEL_CARD':
      return {
        ...state,
        model: action.model,
        listYears: action.payload
      }
    case 'DETAIL_CAR':
      return {
        ...state,
        details: action.payload
      }
    default:
      return state
  }
}
