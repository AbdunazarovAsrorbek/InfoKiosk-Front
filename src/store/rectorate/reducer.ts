import { createSlice } from "@reduxjs/toolkit"

import {
    getRectorateList,
    getRectorateByIdList
} from "./thunk"

export const initialState = {
    rectorateList: [],
    rectorateById: null,
    error: {}
}

const RectorateSlice = createSlice({
    name: 'Rectorate',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(getRectorateList.fulfilled, (state: any, action: any) => {
            console.log(action.payload)
            state.rectorateList = action.payload
        });
        builder.addCase(getRectorateList.rejected, (state: any, action: any) => {
            state.error = action.payload
        });


        builder.addCase(getRectorateByIdList.fulfilled, (state: any, action: any) => {
            console.log(action.payload)
            state.rectorateById = action.payload
        });
        builder.addCase(getRectorateByIdList.rejected, (state: any, action: any) => {
            state.error = action.payload
        });
    }
})


export default RectorateSlice.reducer