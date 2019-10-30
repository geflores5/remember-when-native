import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Button, Text } from "react-native-elements";

import { Container } from '../components/Container';
import { editTimeline, removeTimeline } from '../actions/timelines';
import { removeMemory } from '../actions/memories';
import TimelineForm from '../components/TimelineForm/TimelineForm';

class EditTimelinePage extends Component {
  static propTypes = {
    navigation: PropTypes.object,
  };
  handleGoHome = () => {
    this.props.navigation.navigate('Home');
  };

  render() {
    console.log(this.props.navigation.state.params.timeline.id)
    const currentTimeline = this.props.timeline;
    return (
      <Container>
        <View style={{
          width: '100%',
          justifyContent: 'space-around'
        }}>
          <Text
            h3
            h3Style={{ textAlign: "center", marginBottom: 20 }}
          >
            Edit Timeline
          </Text>
          <View
            style={{
              marginBottom: 20,
              flexDirection: 'row',
              justifyContent: 'center'
            }}>
            <TimelineForm
              timeline={currentTimeline}
              submitTimeline={timeline => {
                this.props.editTimeline(currentTimeline.id, timeline);
              }}
              goHome={this.handleGoHome}
            />
          </View>
          <Button
            buttonStyle={{ margin: 10 }}
            title="Remove Timeline"
            onPress={() => {
              this.props.removeTimeline(currentTimeline.id);
              this.props.memories && this.props.memories.map(memory => (
                this.props.removeMemory(memory.id)
              ));
              this.handleGoHome();
            }}
          />
        </View>
      </Container>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editTimeline: (id, timeline) => dispatch(editTimeline(id, timeline)),
    removeTimeline: (id) => dispatch(removeTimeline(id)),
    removeMemory: (id) => dispatch(removeMemory(id))
  }
};

const mapStateToProps = (state, ownProps) => {
  return {
    timeline: state.firestore.ordered.timelines.find((timeline) => timeline.id === ownProps.navigation.state.params.timeline.id),
    memories: state.firestore.ordered.memories && state.firestore.ordered.memories.filter((memory) => memory.timelineID === ownProps.navigation.state.params.timeline.id)
  }
};


export default connect(mapStateToProps, mapDispatchToProps)(EditTimelinePage);
