import axios from 'axios';

import { renameTask } from '../actionCreators';

import clientApi from '../../API';

import { REQUEST_DECLINED } from '../../constants';

const renameTaskMiddleware = (id, name) => dispatch => {
    const data = JSON.stringify({
        id,
        name
    });

    axios.put(clientApi.server, [data, [{ headers: {"Content-Type": "application/json" } }] ])
        .then((response) => {
            if (response.status === 200) {
                dispatch(renameTask(id, name));
            } else {
                console.error(REQUEST_DECLINED);
            }
        })
        .catch((error) => {
            const errorMessage = error.response.data || error.response.data.msg;
            console.error(errorMessage);
        });
}

export default renameTaskMiddleware;
