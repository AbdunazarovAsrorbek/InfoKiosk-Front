import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  sendApplicationList as sendApplicationListApi,
  getRektorQabulList as getRektorQabulListApi,
} from "../../helpers/helpers";

export const sendApplicationList = createAsyncThunk(
  "Application/sendApplicationList",
  async (sendData: any) => {
    try {
      const response = await sendApplicationListApi(sendData);
      return response.data;
    } catch (error: any) {
      throw error.response?.data || error.message;
    }
  }
);

export const getRektorQabulList = createAsyncThunk(
  "Application/getRektorQabulList",
  async () => {
    try {
      const response = await getRektorQabulListApi();
      return response.data;
    } catch (error: any) {
      throw error.response?.data || error.message;
    }
  }
);
