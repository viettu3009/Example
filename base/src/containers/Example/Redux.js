import { createActions, createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/*--------------------createActions----------------------*/

const { Types, Creators } = createActions({
    addData: null,
    addDataSuccess: ['data']
})

export const ExampleTypes = Types
export const ExampleAction = Creators

export const addDataSuccess = (state, payload) => { 
    const { data } = payload
    return state.merge({ data, actionType: Types.ADD_DATA_SUCCESS })
}

/*--------------------createReducer----------------------*/

export const INITIAL_STATE = Immutable({
    data: 0
})

export const reducer = createReducer(INITIAL_STATE, {
    [Types.ADD_DATA_SUCCESS]: addDataSuccess
})