import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, Button, Input } from "react-native-elements";
import { View } from 'react-native';
import { signIn } from '../actions/auth';
import { Container } from '../components/Container';

class SignIn extends Component {
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
        this.props.signIn(this.state);
        this.props.navigation.navigate('Home');
    };
    render() {
        return (
            <Container>
                <View style={{ paddingVertical: 20, width: 375 }}>
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
                            backgroundColor="transparent"
                            textStyle={{ color: "#bcbec1" }}
                            title="Sign In"
                            onPress={this.submitForm}
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
        signIn: (userInfo) => dispatch(signIn(userInfo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);