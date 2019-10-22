import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, View } from 'react-native';

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
          <Text>{title}</Text>
          <Text>{description}</Text>
        </View>
        <TouchableOpacity onPress={this.handleEditTimeline}>
          <Text>Edit Timeline</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={this.handleAddMemory}>
          <Text>+ Add Memory</Text>
        </TouchableOpacity>
        <MemoryList timelineID={id} />
      </Container>
    );
  }
}

export default ViewTimeline;
