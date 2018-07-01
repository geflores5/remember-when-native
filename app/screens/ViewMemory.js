import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, View } from 'react-native';

import { Memory } from '../components/Memory';

class ViewMemory extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };
  handleEditMemory = () => {
    this.props.navigation.navigate('EditMemory', {
      memory: this.props.navigation.state.params.item,
    });
  };

  render() {
    const { title, date, location, description, media } = this.props.navigation.state.params.item;
    return (
      <View>
        <View>
          <Text>{title}</Text>
          <Text>{date}</Text>
          <Text>{location}</Text>
          <Text>{description}</Text>
          <Text>{media}</Text>
        </View>
        <TouchableOpacity onPress={this.handleEditMemory}>
          <Text>Edit Memory</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ViewMemory;
