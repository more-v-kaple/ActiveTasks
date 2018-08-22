import deepClone from '../../utils/deepClone';

import {
    FETCH_TASKS,
    RENAME_TASK
} from '../actionTypes';

import { NAME, ID } from '../../constants';

const tasks = (state = [], action) => {
    const stateCopy = deepClone(state);

    switch (action.type) {
        case FETCH_TASKS:

            return [...action.payload];
        case RENAME_TASK:

        return stateCopy.map(task => {
            if (task[ID] === action.id) {
                task[NAME] = action.name;
            }
            return task;
        });
        default:
            return state;
    }
};

export default tasks;
