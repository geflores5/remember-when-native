import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, TouchableOpacity, Text, View } from 'react-native';
import { Container } from '../components/Container';
import moment from 'moment';

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
      <Container>
        <View>
          <View>
            <Image source={media} style={{ width: '100%', height: 300, margin: 10 }} />
            <Text>{title}</Text>
            <Text>{moment(date).format('MMMM Do YYYY, h:mm:ss a').toString()}</Text>
            <Text>{location}</Text>
            <Text>{description}</Text>
          </View>
          <TouchableOpacity onPress={this.handleEditMemory}>
            <Text>Edit Memory</Text>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}

export default ViewMemory;
