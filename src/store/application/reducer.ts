import { createSlice } from "@reduxjs/toolkit";
import { sendApplicationList, getRektorQabulList } from "./thunk";

export const initialState = {
  applicationList: { content: [] },
  rektorQabulList: [],
  errors: {},
};

const ApplicationSlice = createSlice({
  name: "Application",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sendApplicationList.fulfilled, (state: any, action: any) => {
        state.applicationList.content.unshift(action.payload);
      })
      .addCase(getRektorQabulList.fulfilled, (state: any, action: any) => {
        state.rektorQabulList = action.payload;
      });
  },
});

export default ApplicationSlice.reducer;
