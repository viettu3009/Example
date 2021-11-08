import React, { useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { ExampleAction } from './Redux'

const useExample = () => {
    const dispatch = useDispatch()

    const data = useSelector(state => state.example.data)
  
    const handleAdd = () => dispatch(ExampleAction.addData())

    return {
        handleAdd,
        data
    }
}

export default useExample