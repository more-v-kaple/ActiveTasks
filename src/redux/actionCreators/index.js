import {
    FETCH_TASKS,
    RENAME_TASK
} from '../actionTypes';

export const fetchTasks = payload => ({
    type: FETCH_TASKS,
    payload
});

export const renameTask = (id, name) => ({
    type: RENAME_TASK,
    id,
    name
});
