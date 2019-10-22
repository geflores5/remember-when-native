import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { FlatList, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import { firestoreConnect } from 'react-redux-firebase';

import { getVisibleTimelines } from '../../selectors';
import { Timeline } from '../Timeline';
import styles from './styles';

const TimelineList = props => (
  <View style={styles.container}>
    <FlatList
      data={props.timelines}
      keyExtractor={(item, index) => item.id}
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
  timelines: getVisibleTimelines(state.timelines, state.timelineFilters),
});

export default withNavigation((compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'timelines' }
  ])
)(TimelineList)));
