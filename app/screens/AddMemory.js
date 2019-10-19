import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';

import { addMemory } from '../actions/memories';
import MemoryForm from '../components/MemoryForm/MemoryForm';

class AddMemoryPage extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };
  handleGoHome = () => {
    this.props.navigation.navigate('Home');
  };

  render() {
    const timeline = this.props.navigation.state.params.timeline;
    return (
      <View>
        <MemoryForm
          timelineID={timeline.id}
          submitMemory={memory => {
            this.props.dispatch(addMemory(memory));
          }}
          goHome={this.handleGoHome}
        />
      </View>
    );
  }
}

export default connect()(AddMemoryPage);
