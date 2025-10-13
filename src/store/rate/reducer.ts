import { createSlice } from "@reduxjs/toolkit"

import {
  postRateService,
  postRateMobile,
} from "./thunk"

export const initialState = {
  rateServiceList: {
    content: []
  },
  error: {}
}

const RateServiceSlice = createSlice({
  name: 'RateService',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
   
    builder.addCase(postRateService.fulfilled, (state: any, action: any) => {
      if (action.payload?.content) {
        state.rateServiceList.content.unshift(action.payload.content);
      }
    });
    builder.addCase(postRateService.rejected, (state: any, action: any) => {
      state.error = action.payload || { message: "Unknown error" };
    });


    builder.addCase(postRateMobile.fulfilled, (state: any, action: any) => {
      if (action.payload?.content) {
        state.rateServiceList.content.unshift(action.payload.content);
      }
    });
    builder.addCase(postRateMobile.rejected, (state: any, action: any) => {
      state.error = action.payload || { message: "Unknown error" };
    });
  },
})

export default RateServiceSlice.reducer