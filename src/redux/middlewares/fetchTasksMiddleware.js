import axios from 'axios';

import { fetchTasks } from '../actionCreators';

import getActiveTasks from '../../utils/getActiveTasks';
import parseData from '../../utils/parseData';

import clientApi from '../../API';

const fetchTasksMiddleware = () => dispatch => {
    axios(clientApi.tasks)
        .then((response) => {
            const activeTasks = getActiveTasks(response.data),
                formattedTasks = parseData(activeTasks);

            dispatch(fetchTasks(formattedTasks));
        })
        .catch((error) => {
            const errorMessage = error.response.data || error.response.data.msg;
            console.error(errorMessage);
        });
}

export default fetchTasksMiddleware;
