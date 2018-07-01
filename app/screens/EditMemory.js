import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, Text, TextInput, View } from 'react-native';

import { editMemory, removeMemory } from '../actions/memories';
import MemoryForm from '../components/MemoryForm/MemoryForm';

class EditMemory extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };
  handleGoHome = () => {
    this.props.navigation.navigate('Home');
  };

  render() {
    const currentMemory = this.props.navigation.state.params.memory;
    return (
      <View>
        <MemoryForm
          memory={currentMemory}
          submitMemory={memory => {
            this.props.dispatch(editMemory(currentMemory.id, memory));
          }}
          goHome={this.handleGoHome}
        />
        <Button
          title="Remove Memory"
          onPress={memory => {
            this.props.dispatch(removeMemory({ id: currentMemory.id }));
            this.handleGoHome();
          }}
        />
      </View>
    );
  }
}

export default connect()(EditMemory);
