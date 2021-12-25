import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    framePrice: 0,
    webPrice: 0,
    uiPrice: 0,
    paymentPrice: 0

}

export const calculatorSlice = createSlice({
    name: 'calculator',
    initialState,
    reducers: {

        frameWorkPrice: (state, { payload }) => {
            if (payload === 'python') {
                state.framePrice = 2000
            }

            else if (payload === 'wordpress') {
                state.framePrice = 3000

            }
            else if (payload === 'phplaravel') {
                state.framePrice = 3500

            }
            else if (payload === 'php') {
                state.framePrice = 4000

            }
            else if (payload === 'kajabi') {
                state.framePrice = 4500

            }
        },

        websiteTypePrice: (state, { payload }) => {
            if (payload === 'ecommerce') {
                state.webPrice = 2000
            }

            else if (payload === 'onlinecourse') {
                state.webPrice = 3000

            }
            else if (payload === 'blog') {
                state.webPrice = 3500

            }
            else if (payload === 'company') {
                state.webPrice = 4000

            }
        },
        uiTypePrice: (state, { payload }) => {
            if (payload === 'yes') {
                state.uiPrice = 200
            }
            else if (payload === 'no') {
                state.uiPrice = 500
            }
        },
        paymentType: (state, { payload }) => {
            if (payload === 'stripe') {
                state.paymentPrice = 200
            }
            else if (payload === 'paypal') {
                state.paymentPrice = 300
            }
            else if (payload === 'both') {
                state.paymentPrice = 500
            }
            else if (payload === 'none') {
                state.paymentPrice = 0
            }

        }


    }
})

// Action creators are generated for each case reducer function
export const { frameWorkPrice, websiteTypePrice, uiTypePrice, paymentType } = calculatorSlice.actions

export default calculatorSlice.reducer