import React, { Component } from 'react';
import { NavigationEvents } from 'react-navigation';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Button } from "react-native-elements";

import { signOut } from '../actions/auth';
import { Container } from '../components/Container';
import { TimelineList } from '../components/TimelineList';

const Home = (props) => {
  const handleAddTimeline = () => {
    props.nav('AddTimelinePage');
  };
  const handleSignOut = () => {
    props.signOut();
    props.nav('SignIn');
  };
  return (
    <Container>
      <NavigationEvents
        onDidFocus={() => {
          if (!props.auth.uid) {
            props.nav('SignIn')
          }
        }}
      />
      <View style={{
        width: '80%',
        justifyContent: 'space-around'
      }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Button
            title='Add Timeline'
            buttonStyle={{ margin: 20 }}
            onPress={handleAddTimeline}
          />
          <Button
            title='Log Out'
            buttonStyle={{ margin: 20 }}
            onPress={handleSignOut}
          />
        </View>
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
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
