import { API_ROOT_DEV, API_ROOT_PROD } from '../constants';
import Reactotron from 'reactotron-react-native';

export const callApi = async (_type = 'GET', _url = '', _data = null) => {
    const fullUrl = (_url.indexOf(`${__DEV__ ? API_ROOT_DEV : API_ROOT_PROD}`) === -1) ? `${__DEV__ ? API_ROOT_DEV : API_ROOT_PROD}` + _url : _url;
    let method = _type.toUpperCase.toString();
    if (_type === 'GET') {
        return await fetch(fullUrl)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                }
                else {
                    throw new Error('Something went wrong on api server');
                }
            }).then(json => {
                return json.data;
            })
            .catch(error => { Reactotron.log(error.message) });
    }
    else {
        return await fetch(fullUrl, {
            method: _type,
            body: _data
        }).then(response => {
            if (response.status === 200) {
                return response.json();
            }
            else {
                throw new Error('Something went wrong on api server');
            }
        }).then(json => {
            return json;
        })
            .catch(error => { Reactotron.log(error.message) });
    }
};