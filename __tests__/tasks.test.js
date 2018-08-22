import tasks from '../src/redux/reducers/tasks';
import * as actions from '../src/redux/actionTypes';

import task from '../src/mock/task';

describe('tasks reducer', () => {
    it('should return the initial state', () => {
        expect(tasks(undefined, [])).toEqual([]);
    });

    it('should handle RENAME_TASK', () => {
        const act = {
            type: actions.RENAME_TASK,
            id: 1,
            name: 'NewName'
        },
            result = [
                {
                    "id": 1,
                    "name": "NewName",
                    "creation_date": "2015-04-21T06:50:21",
                    "due_date": "2015-04-22T23:59:00",
                    "start_date": "2015-04-21T00:00:01",
                    "is_completed": false,
                    "is_archived": false,
                    "estimated_effort": 5.5,
                    "actual_effort": 3.3,
                    "physical_progress": 60,
                    "obj_status": "active",
                    "description": "Lorem_ipsum_dolor_sit_amet,_consectetur_adipiscing_elit",
                    "project_id": 0
                }
            ];

        expect(tasks(task, act)).toEqual(result);
    });
});
