import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, View } from 'react-native';

import styles from './styles';

const Timeline = ({ title, description, onPress }) => (
  <View>
    <TouchableOpacity onPress={onPress}>
      <View style={styles.row}>
        <Text>{title}</Text>
        <Text>{description}</Text>
      </View>
    </TouchableOpacity>
  </View>
);

Timeline.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  onPress: PropTypes.func,
};

export default Timeline;
