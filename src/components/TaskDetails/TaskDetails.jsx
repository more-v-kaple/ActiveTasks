import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import {
    MEDIUM,
    HIGH
} from '../../constants';

import Divider from '@material-ui/core/Divider';
import LinearProgress from '@material-ui/core/LinearProgress';

class TaskDetails extends PureComponent {
    render () {
        const {
            isCompleted,
            priority,
            progress,
            tags,
        } = this.props,
            priorityLevel = priority ? HIGH : MEDIUM;

        return (
            <div className="container">
                <h2>Details</h2>
                <Divider />
                <div className="verticalAlign">
                    <div className="column">
                        <p className="section">
                            <span className="title">Type: </span>
                            Task
                </p>
                        <p className="section">
                            <span className="title">Priority: </span>
                            {priorityLevel}
                        </p>
                        <p className="section">
                            <span className="title">Tags: </span>
                            {tags}
                        </p>
                    </div>
                    <div className="column">
                        <p className="section">
                            <span className="title">Status: </span>
                            Active
                </p>
                        <p className="section">
                            <span className="title">Resolved: </span>
                            {isCompleted.toString()}
                        </p>
                        <div className="section">
                            <span className="title">Progress: </span>
                            <LinearProgress
                                value={progress}
                                variant='determinate'
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
TaskDetails.defaultProps = {
    progress: 0,
    tags: 'None'
};

TaskDetails.propTypes = {
    isCompleted: PropTypes.bool.isRequired,
    priority: PropTypes.bool,
    progress: PropTypes.number,
    tags: PropTypes.string
};

export default TaskDetails;
