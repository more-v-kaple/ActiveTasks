import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Table from '@material-ui/core/Table';

import TableHeader from '../../containers/TableHeader';
import TableFooter from '../../containers/TableFooter';
import TableBody from '../../containers/TableBody';
import Header from '../../components/Header';

const initialState = {
  page: 0,
  rowsPerPage: 5
};

class PageActiveTasks extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      ...initialState
    };
  }

  handleChangePage = (event, page) => {
    this.setState({ page });
  }

  handleChangeRowsPerPage = event => {
    const rowsPerPage = event.target.value;

    this.setState({ rowsPerPage });
  };

  render() {
    const { rowsPerPage, page } = this.state,
      { tasks } = this.props;

    return (
      <div className="active-tasks">
        <Header
          name='Active tasks'
        />
        <Table>
          <TableHeader />
          <TableBody
            rowsPerPage = { rowsPerPage }
            tasks = { tasks }
            page = { page }
          />
          <TableFooter
            onChangeRowsPerPage={this.handleChangeRowsPerPage}
            onChangePage={this.handleChangePage}
            rowsPerPage={rowsPerPage}
            count={tasks.length}
            page={page}
          />
        </Table>
      </div>
    );
  }
}

PageActiveTasks.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
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
  })).isRequired
};

const mapStateToProps = state => ({
  tasks: state.tasks
});

export default connect(mapStateToProps)(PageActiveTasks);
