import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Button, Input, Text } from "react-native-elements";
import { View } from 'react-native';
import { signUp } from '../actions/auth';
import { Container } from '../components/Container';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }
  static propTypes = {
    navigation: PropTypes.object,
  };
  submitForm = () => {
    this.props.signUp(this.state);
    this.props.navigation.navigate('Home');
  };
  render() {
    return (
      <Container>
        <View style={{
          paddingVertical: 20,
        }}>
          <Text
            h1
            h1Style={{ textAlign: "center", marginBottom: 20 }}
          >
            Remember When</Text>
          <Card>
            <Input
              placeholder="Email address..."
              onChangeText={email => this.setState({ email })}
              label="Email"
            />
            <Input
              placeholder="Password..."
              onChangeText={password => this.setState({ password })}
              label="Password"
            />
            <Button
              buttonStyle={{ marginTop: 20 }}
              backgroundColor="#03A9F4"
              title="Sign Up"
              onPress={this.submitForm}
            />
            <Button
              buttonStyle={{ marginTop: 20 }}
              backgroundColor="transparent"
              textStyle={{ color: "#bcbec1" }}
              title="Sign In"
              onPress={() => this.props.navigation.navigate("SignIn")}
            />
          </Card>
        </View>
      </Container>

    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    //authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (userInfo) => dispatch(signUp(userInfo))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);