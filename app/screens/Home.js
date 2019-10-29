import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Button } from "react-native-elements";

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
      <View style={{
        width: '80%',
        justifyContent: 'space-around'
      }}>
        <Button
          title="Add Timeline"
          buttonStyle={{ margin: 20 }}
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
