import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Text } from "react-native-elements";

import { Container } from '../components/Container';
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
    console.log(this.props.navigation.state.params.timeline.id)
    const timeline = this.props.navigation.state.params.timeline;
    return (
      <Container>
        <View style={{
          width: '100%',
          justifyContent: 'space-around'
        }}>
          <Text
            h4
            h4Style={{ textAlign: "center", marginBottom: 5 }}
          >
            Add Memory
          </Text>
          <View
            style={{
              marginBottom: 20,
              flexDirection: 'row',
              justifyContent: 'center'
            }}>
            <MemoryForm
              timelineID={timeline.id}
              submitMemory={memory => {
                this.props.dispatch(addMemory(memory));
              }}
              goHome={this.handleGoHome}
            />
          </View>
        </View>
      </Container>

    );
  }
}

export default connect()(AddMemoryPage);
