import { createAsyncThunk } from "@reduxjs/toolkit";

import {
    getRectorateList as getRectorateListApi,
    getRectorateByIdList as getRectorateByIdListApi,
} from '../../helpers/helpers'

export const getRectorateList = createAsyncThunk("Rectorate/getRectorateList", async () => {
    try {
        const response = await getRectorateListApi();
        console.log(response.data);
        return response.data;
    } catch (error) {
        return error;
    }
});

export const getRectorateByIdList = createAsyncThunk("Rectorate/getRectorateByIdList", async (id:number) => {
    try {
        const response = await getRectorateByIdListApi(id);
        console.log(response.data);
        return response.data;
    } catch (error) {
        return error;
    }
});