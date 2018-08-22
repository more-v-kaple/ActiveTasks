import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
    ESTIMATED_EFFORT,
    HIGH_PRIORITY,
    ACTUAL_EFFORT,
    DUE_DATE,
    NAME,
    TAGS,
    ID
} from '../../constants';

import { TableBody as Body } from '@material-ui/core';

import TableRow from '../TableRow';

class TableBody extends PureComponent {
    render() {
        const { tasks, page, rowsPerPage } = this.props;

        return (
            <Body>
                {
                    tasks.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(task => (
                        <TableRow
                            estimatedEffort={task[ESTIMATED_EFFORT]}
                            isHighPriority={task[HIGH_PRIORITY]}
                            actualEffort={task[ACTUAL_EFFORT]}
                            expires={task[DUE_DATE]}
                            name={task[NAME]}
                            tags={task[TAGS]}
                            key={task[ID]}
                            id={task[ID]}
                        />
                    ))
                }
            </Body>
        )
    }
}

TableBody.propTypes = {
    rowsPerPage: PropTypes.number.isRequired,
    tasks: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        is_high_priority: PropTypes.bool,
        creation_date: PropTypes.string.isRequired,
        due_date: PropTypes.string,
        start_date: PropTypes.string,
        is_completed: PropTypes.bool.isRequired,
        is_archived: PropTypes.bool.isRequired,
        estimated_effort: PropTypes.number,
        actual_effort: PropTypes.number,
        physical_progress: PropTypes.number,
        obj_status: PropTypes.string.isRequired,
        description: PropTypes.string,
        project_id: PropTypes.number.isRequired,
        tags: PropTypes.string
    })).isRequired,
    page: PropTypes.number.isRequired
};

export default TableBody;
