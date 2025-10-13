import { createAsyncThunk } from "@reduxjs/toolkit";

import {
    postRateService as postRateServiceApi,
    postRateMobile as postRateMobileApi,
} from '../../helpers/helpers'

export const postRateService = createAsyncThunk("RateService/postRateService", async (rateData: any) => {
    try {
        const response = await postRateServiceApi(rateData);
        console.log(response);
        console.log(response.data);
        return response.data;
    } catch (error) {
        return error;
    }
});

export const postRateMobile = createAsyncThunk("RateMobile/postRateMobile", async (rateData: any) => {
    try {
        const response = await postRateMobileApi(rateData);
        console.log(response);
        console.log(response.data);
        return response.data;
    } catch (error) {
        return error;
    }
});