import { combineReducers } from 'redux'
import fipeReducers from './reducers/index'

export default combineReducers({
  fipe: fipeReducers
})
