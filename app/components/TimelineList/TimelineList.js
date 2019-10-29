import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { FlatList, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { firestoreConnect } from 'react-redux-firebase';

import { getVisibleTimelines } from '../../selectors';
import { Timeline } from '../Timeline';


const TimelineList = (props) => (
  <View>
    <FlatList
      data={props.timelines}
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

const mapStateToProps = state => ({
  timelines: getVisibleTimelines(state.firestore.ordered.timelines, state.timelineFilters),
});

export default withNavigation((compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'timelines' }
  ])
)(TimelineList)));
