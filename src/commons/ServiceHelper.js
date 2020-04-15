import { API_ROOT_DEV, API_ROOT_PROD } from '../constants';
import Reactotron from 'reactotron-react-native';

export const callApi = async (_type = 'GET', _url = '', _data = null) => {
    const fullUrl = (_url.indexOf(`${__DEV__ ? API_ROOT_DEV : API_ROOT_PROD}`) === -1) ? `${__DEV__ ? API_ROOT_DEV : API_ROOT_PROD}` + _url : _url;
    if (_type === 'GET') {
        return await fetch(fullUrl)
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                else {
                    throw new Error('Something went wrong on api server');
                }
            }).then(json => {
                return json;
            })
            .catch(error => { return { error: error.message } });
    }
    else {
        return await fetch(fullUrl, {
            method: _type,
            body: _data
        }).then(response => {
            if (response.ok) {
                return response.json();
            }
            else {
                throw new Error('Something went wrong on api server');
            }
        }).then(json => {
            return json;
        })
            .catch(error => { return { error: error.message } });
    }
};