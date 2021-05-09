import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import AppNavigator from '@navigators/AppNavigator';

import { rootScreenActions } from './reducer';

export class RootScreen extends Component {
  componentDidMount() {
    // Run the startup saga when the application is starting
    this.props.startup();
  }

  render() {
    return <AppNavigator />;
  }
}

RootScreen.propTypes = {
  startup: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  startup: () => dispatch(rootScreenActions.startup())
});

export default connect(null, mapDispatchToProps)(RootScreen);
