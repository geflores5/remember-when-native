import React, { Component } from 'react';
import { Button, TextInput, View } from 'react-native';

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
      <View>
        <TextInput
          placeholder="Title"
          onChangeText={title => this.setState({ title })}
          value={this.state.title}
        />
        <TextInput
          placeholder="Description"
          onChangeText={description => this.setState({ description })}
          value={this.state.description}
        />
        <Button title="Save Timeline" onPress={this.submitForm} />
      </View>
    );
  }
}

export default TimelineForm;
