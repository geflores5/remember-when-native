import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Button, Text } from "react-native-elements";

import { Container } from '../components/Container';
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
      <Container>
        <View style={{
          width: '100%',
          justifyContent: 'space-around'
        }}>
          <View
            style={{
              margin: 10,
              flexDirection: 'row',
              justifyContent: 'center'
            }}>
            <MemoryForm
              memory={currentMemory}
              submitMemory={memory => {
                this.props.dispatch(editMemory(currentMemory.id, memory));
              }}
              goHome={this.handleGoHome}
            />
          </View>
          <Button
            buttonStyle={{ padding: 0, marginLeft: 10, marginRight: 10 }}
            title="Remove Memory"
            onPress={memory => {
              this.props.dispatch(removeMemory(currentMemory.id));
              this.handleGoHome();
            }}
          />
        </View>
      </Container>

    );
  }
}

export default connect()(EditMemory);
