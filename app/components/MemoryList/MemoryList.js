import React from 'react';
import { connect } from 'react-redux';
import { FlatList, View } from 'react-native';
import { withNavigation } from 'react-navigation';

import { getVisibleMemories } from '../../selectors';
import { Memory } from '../Memory';
import styles from './styles';

const MemoryList = props => (
  <View>
    <FlatList
      data={props.memories}
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
