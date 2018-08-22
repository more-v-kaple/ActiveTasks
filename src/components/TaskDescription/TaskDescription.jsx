import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Divider from '@material-ui/core/Divider';

class TaskDescription extends PureComponent {
    render () {
        const { description } = this.props;

        return (
            <div className="container">
                <h2>Description</h2>
                <Divider />
                <p className="section">
                    {description}
                </p>
            </div>
        )
    }
}
TaskDescription.defaultProps = {
    description: 'no description'
};

TaskDescription.propTypes = {
    description: PropTypes.string
};

export default TaskDescription;
