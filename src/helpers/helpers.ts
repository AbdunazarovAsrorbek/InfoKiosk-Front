
import APIClient from "./api_helpers";
import * as url from "./url_helpers"
const api = new APIClient();


// Faculty
export const getFacultyList = () => api.getFaculty(url.GET_FACULTY_LIST);
export const getFacultyListById = (id: any) => api.getFacultyById(url.GET_FACULTY_BY_ID, id);
export const getFacultyListByIdUnik = (uniqueId : any) => api.getFacultyByIdUnik(url.GET_FACULTY_BY_ID_UNIK, uniqueId );

// Department
export const getDepartmentAllList = () => api.getDepartmentAll(url.GET_DEPARTMENT_ALL_LIST);
export const getDepartmentList = (facultyId: any) => api.getDepartment(url.GET_DEPARTMENT_LIST, facultyId);
export const getDepartmentListById = (id: any) => api.getDepartmentById(url.GET_DEPARTMENT_BY_ID, id);
export const getDepartmentListByIdUnik = (uniqueId : any) => api.getDepartmentByIdUnik(url.GET_DEPARTMENT_BY_ID_UNIK, uniqueId );

// Rate Desktop
export const postRateService = (rateData: any) => api.postRateService(url.POST_RATE_SERVICE, rateData);

// Rate Mobile
export const postRateMobile = (rateData: any) => api.postRateMobile(url.POST_RATE_SERVICE, rateData);

// Application
export const sendApplicationList = (sendData: any) => api.sendApplication(url.APPLICATION, sendData);
export const getRektorQabulList = () => api.getRektorQabulList(url.REKTOR_QABUL);

// Rectorate
export const getRectorateList = () => api.getRectorate(url.GET_RECTORATE)
export const getRectorateByIdList = (id: number) => api.getRectorateById(url.GET_RECTORATE_BY_ID, id)