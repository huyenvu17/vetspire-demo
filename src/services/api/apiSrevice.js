import axios from "axios";
import { DOMAIN, MAIN_DOMAIN } from "../../utils/config";

class API {
    constructor() {
        const service = axios.create({
            headers: {
                'Content-Type': 'application/json'
            }
        });
        service.interceptors.response.use(this.handleSuccess, this.handleError);
        this.service = service;
    }

    clearStorage = () => {
            localStorage.clear();
    };
    handleSuccess(response) {
        return response;
    }

    handleError = error => {
        switch (error.response.status) {
            case 401:
                this.clearStorage();
                break;
            default:
                return Promise.reject(error);
        }
    };

    get(endpoint) {
        return this.service.get(endpoint);
    }

}


export default new API();

