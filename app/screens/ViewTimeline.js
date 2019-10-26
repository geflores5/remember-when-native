import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Button, Text } from "react-native-elements";

import { Container } from '../components/Container';
import { MemoryList } from '../components/MemoryList';

class ViewTimeline extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };
  handleAddMemory = () => {
    this.props.navigation.navigate('AddMemory', {
      timeline: this.props.navigation.state.params.item,
    });
  };
  handleEditTimeline = () => {
    this.props.navigation.navigate('EditTimeline', {
      timeline: this.props.navigation.state.params.item,
    });
  };

  render() {
    console.log(this.props.navigation.state.params.item)
    const { id, title, description } = this.props.navigation.state.params.item;
    return (
      <Container>
        <View>
          <Text
            h1
            h1Style={{ textAlign: "center", marginTop: 30 }}
          >
            {title}
          </Text>
          <Text
            h4
            h4Style={{ textAlign: "center", marginBottom: 20 }}
          >
            {description}
          </Text>
        </View>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '80%',
          marginBottom: 20
        }}>
          <Button
            backgroundColor="#03A9F4"
            title="Edit Timeline"
            onPress={this.handleEditTimeline}
          />
          <Button
            backgroundColor="#03A9F4"
            title="Add Memory"
            onPress={this.handleAddMemory}
          />
        </View>
        <MemoryList timelineID={id} />
      </Container>
    );
  }
}

export default ViewTimeline;
