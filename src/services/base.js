import axios from 'axios';
import AuthenticationService from './authentication';
import StorageService from './storage';

export default class BaseService {

    static getNewAxiosClient() {
        return axios.create();
    }

    static getAxiosClient() {
        const axiosClient = axios.create({
            baseURL: process.env.VUE_APP_API_ROOT,
        });
        axiosClient.interceptors.request.use(BaseService.appendApiKey);
        axiosClient.defaults.headers.common.authorization = AuthenticationService.getToken();
        axiosClient.interceptors.response.use((response) => {
                if (response.config.method !== 'get')
                // Do something with response data
                return response;
            },
            (error) => {
                if (!error.response) {
                    return Promise.reject('Please check your internet.');
                }
                if (error.response.status === 401) {
                    const token = StorageService.getObject('originalUserToken');
                    if (token && token !== '' && this.allowSandboxLogin()) {
                        return Promise.reject(error);
                    }
                    AuthenticationService.deleteToken();
                    AuthenticationService.setRefreshTokenTime('');
                    return false;
                }

                return Promise.reject(error);
            });
        return axiosClient;
    }

    static appendApiKey(request) {
        if (request.url.includes('?')) {
            request.url += `&key=${process.env.VUE_APP_API_KEY}`;
        } else {
            request.url += `?key=${process.env.VUE_APP_API_KEY}`;
        }
        return request;
    }


    static paramParser(params) {
        let queryParam = '?';
        for (const key of Object.keys(params)) {
            const value = params[key];
            if (value instanceof Array) {
                const param = value.map(paramValue => `${key}=${paramValue}`).join('&');
                queryParam = `${queryParam}${queryParam === '?' ? '' : '&'}${param}`;
            } else {
                queryParam = `${queryParam}${queryParam === '?' ? '' : '&'}${key}=${value}`;
            }
        }
        return queryParam;
    }
}
