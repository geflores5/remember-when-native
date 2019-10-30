import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Text } from "react-native-elements";
import { Container } from '../components/Container';

import { addTimeline } from '../actions/timelines';
import TimelineForm from '../components/TimelineForm/TimelineForm';

class AddTimelinePage extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };
  handleGoHome = () => {
    this.props.navigation.navigate('Home');
  };

  render() {
    return (
      <Container>
        <View style={{
          width: '100%',
          justifyContent: 'space-around'
        }}>
          <Text
            h3
            h3Style={{ textAlign: "center", marginBottom: 5 }}
          >
            Add Timeline
          </Text>
          <View
            style={{
              marginBottom: 20,
              flexDirection: 'row',
              justifyContent: 'center'
            }}>
            <TimelineForm
              submitTimeline={timeline => {
                this.props.dispatch(addTimeline(timeline));
              }}
              goHome={this.handleGoHome}
            />
          </View>
        </View>
      </Container>
    );
  }
}

export default connect()(AddTimelinePage);
