import axios from 'axios';

/**
 * Create an Axios Client with defaults
 */
let client = null;

export const initializeClient = function () {
    client = axios.create({
        baseURL: 'https://hermes-services.azurewebsites.net/',
        // baseURL: 'https://localhost:44335',
        headers:  { 'Authorization': 'Bearer '+ localStorage.getItem('token') }
    });
};

initializeClient();
const request = function (options) {

    const onSuccess = function (response) {
        //console.info('Request Successful: response: ', response);
        return response;
    };

    const onError = function (error) {
        console.error('Request Failed: Config Sent:', error.config);

        if (error.response) {
            console.error('Status:', error.response.status);
            console.error('Data:', error.response.data);
            console.error('Headers:', error.response.headers);

            if(error.response.status === 500){
                error.response.data = "Error en el servidor";
            }
        } else {
            console.error('Error Message:', error.message);
        }
        return Promise.reject(error.response || error.message);
    };

    return client(options)
        .then(onSuccess)
        .catch(onError);
};

export default request;

