import { createAsyncThunk } from "@reduxjs/toolkit";

import {
    getFacultyList as getFacultyListApi,
    getFacultyListById as getFacultyByIdApi,
    getFacultyListByIdUnik as getFacultyListByIdUnikApi,

    getDepartmentAllList as getDepartmentAllListApi,
    getDepartmentList as getDepartmentListApi,
    getDepartmentListById as getDepartmentListByIdApi,
    getDepartmentListByIdUnik as getDepartmentListByIdUnikApi,
} from "../../helpers/helpers"

export const getFacultyList = createAsyncThunk("Faculty/getFacultyList", async () => {
    try {
        const response = await getFacultyListApi()
        console.log(response.data);
        return response.data
    } catch (error) {
        return error
    }
})

export const getFacultyById = createAsyncThunk("Faculty/getFacultyListById", async (id: any) => {
    try {
        const response = await getFacultyByIdApi(id);
        console.log(response.data);
        return response.data;
    } catch (error) {
        return error
    }
});

export const getFacultyListByIdUnik = createAsyncThunk("Faculty/getFacultyListByIdUnik", async (uniqueId: any) => {
    try {
        const response = await getFacultyListByIdUnikApi(uniqueId);
        console.log(response.data);
        return response.data;
    } catch (error) {
        return error
    }
}
);

export const getDepartmentAllList = createAsyncThunk("Faculty/getDepartmentAllList", async () => {
    try {
        const response = await getDepartmentAllListApi();
        console.log(response.data);
        return response.data;
    } catch (error) {
        return error;
    }
});

export const getDepartmentList = createAsyncThunk("Faculty/getDepartmentList", async ({ facultyId }: { facultyId: any }) => {
    try {
        const response = await getDepartmentListApi(facultyId);
        console.log(response.data, facultyId);
        return response.data;
    } catch (error) {
        return error;
    }
});

export const getDepartmentById = createAsyncThunk("Faculty/getDepartmentListById", async (id: any) => {
    try {
        const response = await getDepartmentListByIdApi(id);
        console.log(response.data);
        return response.data;
    } catch (error) {
        return error
    }
}
);

export const getDepartmentListByIdUnik = createAsyncThunk("Faculty/getDepartmentListByIdUnik", async (uniqueId: any) => {
    try {
        const response = await getDepartmentListByIdUnikApi(uniqueId);
        console.log(response.data);
        console.log(response);
        return response.data;
    } catch (error) {
        return error
    }
}
);