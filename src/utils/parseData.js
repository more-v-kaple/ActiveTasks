import formatDate from './formatDate';

import { DATE, TAGS } from '../constants';

const parseData = data => {

    return data.map(task => {
        for (let key in task) {
            if (key.includes(DATE)) {
                task[key] = formatDate(task[key]);
            }
            if (key.includes(TAGS)) {
                task[key] = task[key].map(tag => `#${tag}`).join(' ');
            }
        }

        return task;
    })
};

export default parseData;
