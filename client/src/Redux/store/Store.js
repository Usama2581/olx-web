import { createStore } from 'redux'
import searchReducer from '../reducer/searchReducer'

const store = createStore(searchReducer)

export default store