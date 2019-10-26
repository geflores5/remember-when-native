import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, Button, Input } from "react-native-elements";

class TimelineForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.timeline ? this.props.timeline.title : '',
      description: this.props.timeline ? this.props.timeline.description : '',
    };
  }
  submitForm = () => {
    this.props.submitTimeline({
      title: this.state.title,
      description: this.state.description,
    });
    this.props.goHome();
  };
  render() {
    return (
      <View
        style={{
          display: 'flex',
          width: '90%',
          height: '60%',
          padding: 0
        }}>
        <Card containerStyle={{
          margin: 0,
          padding: 10,
          width: '100%',
        }}>
          <Input
            placeholder='Title'
            onChangeText={title => this.setState({ title })}
            label='Title'
            value={this.state.title}
          />
          <Input
            placeholder='Description'
            onChangeText={description => this.setState({ description })}
            label="Description"
            value={this.state.description}
          />
          <Button
            buttonStyle={{ marginTop: 20 }}
            backgroundColor="#03A9F4"
            title="Save Timeline"
            onPress={this.submitForm}
          />
        </Card>
      </View>
    );
  }
}

export default TimelineForm;
