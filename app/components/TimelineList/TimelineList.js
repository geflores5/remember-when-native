import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { FlatList, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { firestoreConnect } from 'react-redux-firebase';

import { getVisibleTimelines } from '../../selectors';
import { Timeline } from '../Timeline';


const TimelineList = (props) => {
  const userTimelines = [];
  {
    props.timelines && props.timelines.map(timeline => {
      if (props.auth.uid === timeline.userID) {
        userTimelines.push(timeline)
      }
    })
  }
  return (
    <View>
      <FlatList
        data={userTimelines}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Timeline
            title={item.title}
            description={item.description}
            onPress={() => {
              props.navigation.navigate('ViewTimeline', { item });
            }}
          />
        )}
      />
    </View>
  );
}

const mapStateToProps = state => ({
  timelines: getVisibleTimelines(state.firestore.ordered.timelines, state.timelineFilters),
  auth: state.firebase.auth
});

export default withNavigation((compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'timelines' }
  ])
)(TimelineList)));
