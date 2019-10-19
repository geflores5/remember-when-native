import React from 'react';
import { connect } from 'react-redux';
import { FlatList, View } from 'react-native';
import { withNavigation } from 'react-navigation';

import styles from './styles';
import { getVisibleMemories } from '../../selectors';
import { Memory } from '../Memory';

const MemoryList = props => (
  <View style={styles.container}>
    <FlatList
      data={props.memories.filter((memory) => {
        const timelineIDMatch = memory.timelineID === props.timelineID;
        return timelineIDMatch;
      })}
      keyExtractor={(item, index) => item.id}
      renderItem={({ item }) => (
        <Memory
          title={item.title}
          date={item.date}
          location={item.location}
          description={item.description}
          media={item.media}
          onPress={() => {
            props.navigation.navigate('ViewMemory', { item });
          }}
        />
      )}
    />
  </View>
);

const mapStateToProps = state => ({
  memories: getVisibleMemories(state.memories, state.memoryFilters),
});

export default withNavigation(connect(mapStateToProps)(MemoryList));
