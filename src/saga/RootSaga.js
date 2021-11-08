import { takeEvery, takeLatest } from 'redux-saga/effects'
import { ExampleTypes } from '../containers/Example/Redux'

import { watchAddDataAction } from '../containers/Example/Core'

function* rootSaga() {
    yield takeLatest(ExampleTypes.ADD_DATA, watchAddDataAction)
}

export default rootSaga