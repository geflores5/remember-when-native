import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Text, TextInput, View } from 'react-native';

import { addMemory } from '../actions/memories';
import MemoryForm from '../components/MemoryForm/MemoryForm';

class AddMemoryPage extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };
  handleGoBack = () => {
    this.props.navigation.goBack();
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
          goBack={this.handleGoBack}
        />
      </View>
    );
  }
}

export default connect()(AddMemoryPage);
