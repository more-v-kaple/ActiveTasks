import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import fetchTasksMiddleware from '../../redux/middlewares/fetchTasksMiddleware';

import PageActiveTasks from '../../pages/PageActiveTasks';
import PageTaskDetails from '../../pages/PageTaskDetails';
import PageNotFound from '../../pages/PageNotFound';

class Main extends Component {

  componentDidMount() {
    const { fetchTasks } = this.props;

    fetchTasks();
  }

  render () {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={ PageActiveTasks } />
          <Route path="/task/:id" component={ PageTaskDetails } />
          <Route component={ PageNotFound } />
        </Switch>
      </Router>
    );
  }
}

Main.propTypes = {
  fetchTasks: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
    fetchTasks: () => dispatch(fetchTasksMiddleware())
});

export default connect(null, mapDispatchToProps)(Main);
