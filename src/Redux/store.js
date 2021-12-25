import { configureStore } from '@reduxjs/toolkit'
import calculatorSlice from './Calculate/CalculateSlice'

export const store = configureStore({
    reducer: {
        calculator: calculatorSlice
    },
})