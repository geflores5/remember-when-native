import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Text, View } from 'react-native';
import { ListItem } from 'react-native-elements';


const Memory = ({ title, description, onPress }) => (
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

Memory.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  onPress: PropTypes.func,
};

export default Memory;
