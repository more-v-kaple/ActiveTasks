import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Divider from '@material-ui/core/Divider';

class TaskDates extends PureComponent {
    render () {
        const { created, started, expires } = this.props;

        return (
            <div className="container">
                <h2>Dates</h2>
                <Divider />
                <p className="section">
                    <span className="title">Created: </span>
                    {created}
                </p>
                <p className="section">
                    <span className="title">Started: </span>
                    {started}
                </p>
                <p className="section">
                    <span className="title">Expires: </span>
                    {expires}
                </p>
            </div>
        )
    }
}

TaskDates.propTypes = {
    created: PropTypes.string.isRequired,
    started: PropTypes.string.isRequired,
    expires: PropTypes.string.isRequired
};

export default TaskDates;
