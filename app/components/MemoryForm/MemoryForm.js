import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Text, View } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import ImagePicker from 'react-native-image-picker';
import moment from 'moment';
import { Card, Button, Input } from "react-native-elements";

class MemoryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: this.props.timeline ? this.props.timeline.userID : this.props.auth.uid,
      timelineID: props.memory ? props.memory.timelineID : props.timelineID,
      title: props.memory ? props.memory.title : '',
      date: props.memory ? moment(props.memory.date) : moment(),
      location: props.memory ? props.memory.location : '',
      description: props.memory ? props.memory.description : '',
      media: props.memory ? props.memory.media : {},
      imageUrl: props.memory ? props.memory.imageUrl : '',

      isDateTimePickerVisible: false,
      isChosen: false,
    };
  }
  submitForm = () => {
    this.props.submitMemory({
      userID: this.state.userID,
      timelineID: this.state.timelineID,
      title: this.state.title,
      date: this.state.date.valueOf(),
      location: this.state.location,
      description: this.state.description,
      imageUrl: this.state.imageUrl,
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
      title: 'Select Image'
    }
    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
      if (response.uri) {
        this.setState({ media: response });
      }
      console.log(this.state);
    });
  };
  render() {
    return (
      <View
        style={{
          width: '90%',
          padding: 0
        }}>
        <Card containerStyle={{
          margin: 0,
          padding: 10,
          width: '100%',
        }}>
          <Input
            placeholder="Title"
            label='Title'
            onChangeText={title => this.setState({ title })}
            value={this.state.title}
          />
          <Button
            buttonStyle={{ margin: 3 }}
            onPress={this.showDateTimePicker}
            title={this.state.isChosen ? <Text>{moment(this.state.date).format('MMMM Do YYYY, h:mm:ss a').toString()}</Text> : <Text>Choose Date</Text>}
          />
          <DateTimePicker
            mode={'datetime'}
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this.handleDatePicked}
            onCancel={this.hideDateTimePicker}
          />
          <Input
            placeholder="Location"
            label='Location'
            onChangeText={location => this.setState({ location })}
            value={this.state.location}
          />
          <Input
            placeholder="Description"
            label='Description'
            onChangeText={description => this.setState({ description })}
            value={this.state.description}
          />
          <Button
            buttonStyle={{ margin: 3 }}
            onPress={this.pickImageHandler}
            title='Select Image'
          />
          <Image
            source={{ uri: this.state.imageUrl }}
            style={{ width: '100%', height: 230 }}
          />
          <Button
            buttonStyle={{ margin: 3 }}
            title="Save Memory"
            onPress={this.submitForm}
          />
        </Card>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(MemoryForm);
