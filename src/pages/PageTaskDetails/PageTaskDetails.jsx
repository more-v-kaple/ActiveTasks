import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';

import renameTaskMiddleware from '../../redux/middlewares/renameTaskMiddleware';

import isObjectEmpty from '../../utils/isObjectEmpty';

import {
    HIGH_PRIORITY,
    IS_COMPLITED,
    DESCRIPTION,
    PROGRESS,
    DUE_DATE,
    CREATED,
    STARTED,
    NAME,
    TAGS,
    ID
} from '../../constants';

import TextField from '@material-ui/core/TextField';

import PageNotFound from '../PageNotFound';
import BackToMain from '../../containers/BackToMain';
import Header from '../../components/Header';
import TaskDetails from '../../components/TaskDetails';
import TaskDates from '../../components/TaskDates';
import TaskDescription from '../../components/TaskDescription';

const styles = () => ({
    textField: {
        padding: '15px',
        marginRight: '20px',
        height: 70,
        fontSize: '25px',
        border: '2px solid #365d95',
        borderRadius: '10px',
        background: 'linear-gradient(45deg, #499bea 30%, #ffffff 90%)'
    }
});

class PageTaskDetails extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            name: props.task[NAME]
        }
    }

    componentDidUpdate(prevProps, prevState) {
        const name = this.props.task[NAME];

        if (!prevState.name && name) {
            this.setState({ name })
        }
    }

    handleChange = e => {
        const name = e.target.value;

        this.setState({ name });
    }

    handleBlur = () => {
        const { renameTask } = this.props,
            prevName = this.props.task.name,
            { name } = this.state;

        if (prevName !== name) {
            renameTask(name);
        }
    }

    render() {
        const { task, classes } = this.props,
            { name } = this.state,
            isError = isObjectEmpty(task);

        return (
            <div className="page__task-details">
                {
                    isError ?
                        <PageNotFound />
                        :
                        <div className="task-details">
                            <Header
                                name='Task details'
                            />
                            <TextField type="text"
                                classes= {{
                                    root: classes.textField
                                }}
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                value={name || ''}
                            />
                            <BackToMain />
                            <TaskDetails
                                isCompleted={task[IS_COMPLITED]}
                                priority={task[HIGH_PRIORITY]}
                                progress={task[PROGRESS]}
                                tags={task[TAGS]}
                            />
                            <TaskDescription
                                description={task[DESCRIPTION]}
                            />
                            <TaskDates
                                created={task[CREATED]}
                                started={task[STARTED]}
                                expires={task[DUE_DATE]}
                            />
                        </div>
                }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    tasks: state.tasks
});

const mapDispatchToProps = dispatch => ({
    renameTask: (id, name) => dispatch(renameTaskMiddleware(id, name))
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    const id = parseFloat(ownProps.match.params.id),
        task = stateProps.tasks.find(task => task[ID] === id) || {},
        renameTask = dispatchProps.renameTask.bind(null, id);

    return {
        renameTask,
        task
    }
}

PageTaskDetails.propTypes = {
    renameTask: PropTypes.func.isRequired,
    task: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        creation_date: PropTypes.string,
        due_date: PropTypes.string,
        start_date: PropTypes.string,
        is_completed: PropTypes.bool,
        is_archived: PropTypes.bool,
        estimated_effort: PropTypes.number,
        actual_effort: PropTypes.number,
        physical_progress: PropTypes.number,
        obj_status: PropTypes.string,
        description: PropTypes.string,
        project_id: PropTypes.number,
        tags: PropTypes.string
      })
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(withStyles(styles)(PageTaskDetails));
