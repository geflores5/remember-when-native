import React, { Component } from 'react';
import { Button, Image, TextInput, Text, TouchableOpacity, View } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import ImagePicker from 'react-native-image-picker';
import moment from 'moment';

class MemoryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timelineID: this.props.memory ? this.props.memory.timelineID : this.props.timelineID,
      title: this.props.memory ? this.props.memory.title : '',
      date: this.props.memory ? moment(this.props.memory.date) : moment(),
      location: this.props.memory ? this.props.memory.location : '',
      description: this.props.memory ? this.props.memory.description : '',
      media: this.props.memory ? this.props.memory.media : [],

      isDateTimePickerVisible: false,
      isChosen: false,
    };
  }
  submitForm = () => {
    this.props.submitMemory({
      timelineID: this.state.timelineID,
      title: this.state.title,
      date: this.state.date.valueOf(),
      location: this.state.location,
      description: this.state.description,
      media: this.state.media,
    });
    this.props.goHome();
  };
  showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
  hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
  handleDatePicked = (date) => {
    this.setState({ date });
    this.setState({ isChosen: true });
    this.hideDateTimePicker();
  };
  pickImageHandler = () => {
    const options = {
      title: 'Select Image',
      noData: true
    }
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
      if (response.uri) {
        this.setState({ media: response });
      }
    });
  };
  render() {
    return (
      <View>
        <TextInput
          placeholder="Title"
          onChangeText={title => this.setState({ title })}
          value={this.state.title}
        />
        <TouchableOpacity onPress={this.showDateTimePicker}>
          {this.state.isChosen ? <Text>{moment(this.state.date).format('MMMM Do YYYY, h:mm:ss a').toString()}</Text> : <Text>Choose Date</Text>}
        </TouchableOpacity>
        <DateTimePicker
          mode={'datetime'}
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
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
        <TouchableOpacity onPress={this.pickImageHandler}>
          <Text>Select Image</Text>
        </TouchableOpacity>
        <Image
          source={{ uri: this.state.media }}
          style={{ width: 300, height: 300 }}
        />
        <Button title="Save Memory" onPress={this.submitForm} />
      </View>
    );
  }
}

export default MemoryForm;
