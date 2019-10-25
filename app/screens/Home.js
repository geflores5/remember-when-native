import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button, TouchableOpacity, Text, View } from 'react-native';

import { Container } from '../components/Container';
import { TimelineList } from '../components/TimelineList';

const Home = (props) => {
  const handleAddTimeline = () => {
    props.nav('AddTimelinePage');
  };
  const handleSignIn = () => {
    props.nav('SignIn');
  };
  return (
    <Container>
      <View>
        <Button
          title="Add Timeline"
          onPress={handleAddTimeline}
        />
        <TimelineList />
      </View>
    </Container>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.firebase.auth,
    nav: ownProps.navigation.navigate
  }
}

export default connect(mapStateToProps)(Home);
