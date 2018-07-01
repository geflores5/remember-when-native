import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text, TextInput, View } from 'react-native';

import { addTimeline } from '../actions/timelines';
import TimelineForm from '../components/TimelineForm/TimelineForm';

class AddTimelinePage extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };
  handleGoHome = () => {
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <View>
        <TimelineForm
          submitTimeline={timeline => {
            this.props.dispatch(addTimeline(timeline));
          }}
          goHome={this.handleGoHome}
        />
      </View>
    );
  }
}

export default connect()(AddTimelinePage);
