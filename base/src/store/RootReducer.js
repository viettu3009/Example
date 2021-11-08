import { combineReducers } from 'redux'

import * as Example from '../containers/Example/Redux'

const rootReducer = combineReducers({
    example: Example.reducer
})

export default rootReducer