import { API_ROOT } from '../constants';
import Reactotron from 'reactotron-react-native';

export const callApi = async (_type = 'GET', _url = '', _data = null) => {
    const fullUrl = (_url.indexOf(API_ROOT) === -1) ? API_ROOT + _url : _url;
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
            method: method,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(_data)
        }).then(response => {
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
};

//User call api
//export const fetchGetMenu = () =>  callApi('GET', `/api/store/getMenuStore`);