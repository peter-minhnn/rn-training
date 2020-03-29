import { API_ROOT } from '../constants';
import Reactotron from 'reactotron-react-native';

const callApi = async (_type = 'GET', _url = '', _data = null) => {
    const fullUrl = (_url.indexOf(API_ROOT) === -1) ? API_ROOT + _url : _url;
    let method = _type.toUpperCase.toString();
    const result = { status: true, data: null };

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
        result.status = true;
        result.data = json;
        return result;
    })
        .catch(error => { Reactotron.log(error.message) });
};

//User call api
export const fetchGetUser = async userId => await callApi('GET', `/api/users/${userId}`);