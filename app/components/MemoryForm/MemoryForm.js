import React, { Component } from 'react';
import { Button, TextInput, View } from 'react-native';

class MemoryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timelineID: this.props.memory ? this.props.memory.timelineID : this.props.timelineID,
      title: this.props.memory ? this.props.memory.title : '',
      date: this.props.memory ? this.props.memory.date : '',
      location: this.props.memory ? this.props.memory.location : '',
      description: this.props.memory ? this.props.memory.description : '',
      media: this.props.memory ? this.props.memory.media : '',
    };
  }
  submitForm = () => {
    this.props.submitMemory({
      timelineID: this.state.timelineID,
      title: this.state.title,
      date: this.state.date,
      location: this.state.location,
      description: this.state.description,
      media: this.state.media,
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
          placeholder="Date"
          onChangeText={date => this.setState({ date })}
          value={this.state.date}
        />
        <TextInput
          placeholder="Location"
          onChangeText={location => this.setState({ location })}
          value={this.state.location}
        />
        <TextInput
          placeholder="Description"
          onChangeText={description => this.setState({ description })}
          value={this.state.description}
        />
        <TextInput
          placeholder="Pictures and Video"
          onChangeText={media => this.setState({ media })}
          value={this.state.media}
        />
        <Button title="Save Memory" onPress={this.submitForm} />
      </View>
    );
  }
}

export default MemoryForm;
