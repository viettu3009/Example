import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './RootReducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../saga/RootSaga'

const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
              shouldHotReload: false,
          })
        : compose

const sagaMiddleware = createSagaMiddleware()

const configureStore = () => {
    const middleWares = [sagaMiddleware]
    const enhancers = [applyMiddleware(...middleWares)]
    const store = createStore(rootReducer, composeEnhancers(...enhancers))
    sagaMiddleware.run(rootSaga)
    return store
}

export default configureStore