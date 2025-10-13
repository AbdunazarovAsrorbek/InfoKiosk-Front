import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_API_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;

class APIClient {
    get = (url: any, params: any) => {
        let response;

        let paramKeys: any = [];

        if (params) {
            Object.keys(params).map(key => {
                paramKeys.push(key + '=' + params[key]);
                return paramKeys;
            });

            const queryString = paramKeys && paramKeys.length ? paramKeys.join('&') : "";
            response = axios.get(`${url}?${queryString}`, params);
        } else {
            response = axios.get(`${url}`, params);
        }

        return response;
    };

    // Faculty
    getFaculty = (url: any) => {
        return axios.get(url);
    }

    getFacultyById = (url: any, id: any) => {
        return axios.get(`${url}/${id}`);
    }

    getFacultyByIdUnik = (url: any, uniqueId : any) => {
        return axios.get(`${url}/${uniqueId }`);
    }

    // Department
    getDepartmentAll = (url: any) => {
        return axios.get(url)
    };

    getDepartment = (url: any, facultyId: any) => {
        return axios.get(`${url}/${facultyId}`)
    };

    getDepartmentById = (url: any, id: any) => {
        return axios.get(`${url}/${id}`);
    }

    getDepartmentByIdUnik = (url: any, uniqueId : any) => {
        return axios.get(`${url}/${uniqueId }`);
    }

    // Rate Desktop
    postRateService = (url: any, rateData: any) => {
        return axios.post(url, rateData)
    }

    // Rate Mobile
    postRateMobile = (url: any, rateData: any) => {
        return axios.post(url, rateData)
    }

    // Application
    sendApplication = (url: any, sendData: any) => {
        return axios.post(url, sendData)
    }

    getRektorQabulList = (url: any) => {
        return axios.get(url);
    };

    // Rectorate
    getRectorate = (url: any) => {
        return axios.get(url)
    }

    getRectorateById = (url: any, id: number) => {
        return axios.get(`${url}/${id}`)
    }
}

export default APIClient