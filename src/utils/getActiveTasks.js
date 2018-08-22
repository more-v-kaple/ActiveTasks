import { STATUS, ACTIVE } from '../constants';

const getActiveTasks = tasks => {

    return tasks.filter(task => (
        task[STATUS] === ACTIVE
    ));
};

export default getActiveTasks;
