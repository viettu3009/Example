import { select, put } from 'redux-saga/effects'

import { ExampleAction } from './Redux'

export function* watchAddDataAction() {

    const store = yield select()

    const data = store.example.data += 1

    yield put(ExampleAction.addDataSuccess(data))
}