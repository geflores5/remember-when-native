import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, View } from 'react-native';

import styles from './styles';

const Memory = ({ title, description, onPress }) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onPress}>
      <View style={styles.row}>
        <Text>{title}</Text>
        <Text>{description}</Text>
      </View>
    </TouchableOpacity>
  </View>
);

Memory.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  onPress: PropTypes.func,
};

export default Memory;
