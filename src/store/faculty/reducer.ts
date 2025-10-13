
import { createSlice } from "@reduxjs/toolkit";

import {
    getFacultyList,
    getFacultyById,
    getFacultyListByIdUnik,
    getDepartmentAllList,
    getDepartmentList,
    getDepartmentById,
    getDepartmentListByIdUnik,
} from "./thunk";

export const initialState = {
    facultyList: [],
    facultyDetail: null,
    departmentList: [],
    departmentDetail: null,
    error: {}
};

const FacultySlice = createSlice({
    name: 'FacultySlice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(getFacultyList.fulfilled, (state: any, action: any) => {
            console.log(action.payload);
            state.facultyList = action.payload;
        });
        builder.addCase(getFacultyList.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });

        builder.addCase(getFacultyById.fulfilled, (state: any, action: any) => {
            console.log(action.payload);
            state.facultyDetail = action.payload;
        });
        builder.addCase(getFacultyById.rejected, (state: any, action: any) => {
            state.error = action.payload.error || null;
        });

        builder.addCase(getFacultyListByIdUnik.fulfilled, (state: any, action: any) => {
            console.log(action.payload);
            state.facultyDetail = action.payload;
        });
        builder.addCase(getFacultyListByIdUnik.rejected, (state: any, action: any) => {
            state.error = action.error || "Unknown error";
        });

        builder.addCase(getDepartmentAllList.fulfilled, (state: any, action: any) => {
            console.log(action.payload);
            state.departmentList = action.payload;
        });
        builder.addCase(getDepartmentAllList.rejected, (state: any, action: any) => {
            state.error = action.error || "Unknown error";
        });

        builder.addCase(getDepartmentList.fulfilled, (state: any, action: any) => {
            console.log(action.payload);
            state.departmentList = action.payload;
        });
        builder.addCase(getDepartmentList.rejected, (state: any, action: any) => {
            state.error = action.error || "Unknown error";
        });

        builder.addCase(getDepartmentById.fulfilled, (state: any, action: any) => {
            console.log(action.payload);
            state.departmentDetail = action.payload;
        });
        builder.addCase(getDepartmentById.rejected, (state: any, action: any) => {
            state.error = action.error || "Unknown error";
        });

        builder.addCase(getDepartmentListByIdUnik.fulfilled, (state: any, action: any) => {
            console.log(action.payload);
            state.departmentDetail = action.payload;
        });
        builder.addCase(getDepartmentListByIdUnik.rejected, (state: any, action: any) => {
            state.error = action.error || "Unknown error";
        });
    }
});

export default FacultySlice.reducer;