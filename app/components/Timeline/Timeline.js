import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View } from 'react-native';
import { ListItem } from 'react-native-elements';

import styles from './styles';

const Timeline = ({ title, description, onPress }) => (
  <View>
    <TouchableOpacity
      style={{ width: '100%' }}
      onPress={onPress}
    >
      <ListItem
        title={title}
        subtitle={description}
        bottomDivider
      />
    </TouchableOpacity>
  </View>
);

Timeline.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  onPress: PropTypes.func,
};

export default Timeline;
