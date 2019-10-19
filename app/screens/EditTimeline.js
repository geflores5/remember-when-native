import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Text, TextInput, View } from 'react-native';

import { editTimeline, removeTimeline } from '../actions/timelines';
import TimelineForm from '../components/TimelineForm/TimelineForm';

class EditTimelinePage extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };
  handleGoHome = () => {
    this.props.navigation.navigate('Home');
  };

  render() {
    const currentTimeline = this.props.navigation.state.params.timeline;
    return (
      <View>
        <TimelineForm
          timeline={currentTimeline}
          submitTimeline={timeline => {
            this.props.dispatch(editTimeline(currentTimeline.id, timeline));
          }}
          goHome={this.handleGoHome}
        />
        <Button
          title="Remove Timeline"
          onPress={timeline => {
            this.props.dispatch(removeTimeline({ id: currentTimeline.id }));
            this.handleGoHome();
          }}
        />
      </View>
    );
  }
}

export default connect()(EditTimelinePage);
