import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, View } from 'react-native';

import { Container } from '../components/Container';
import { TimelineList } from '../components/TimelineList';

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };
  handleAddTimeline = () => {
    this.props.navigation.navigate('AddTimelinePage');
  };

  render() {
    return (
      <Container>
        <View>
          <TouchableOpacity onPress={this.handleAddTimeline}>
            <Text>Add Timeline</Text>
          </TouchableOpacity>
          <TimelineList />
        </View>
      </Container>
    );
  }
}

export default Home;
