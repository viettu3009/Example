import React from 'react'

import { Provider } from 'react-redux'
import configureStore from './src/store/ConfigStore'

import Example from './src/containers/Example'

const store = configureStore()

function App() {
    return(
        <Provider store={store}>
            <Example />
        </Provider>
    )
}

export default App;
