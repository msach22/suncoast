import React, { Component } from 'react';
import { View, Text, Button, TextInput,  } from 'react-native';
import CameraApp from './src/CameraApp';
import AlertAPI from './src/AlertAPI';
import OpenTokApp from './src/OpenTokApp';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Manik',
    };
  }
  changeName = () => {
    this.setState({
      name: 'James',
    });
  }

  handleChange = (name) => {
    this.setState({
      name,
    });
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TextInput
          style={{ width: 100 }}
          value={this.state.name}
          placeholder="Text"
          onChangeText={this.handleChange}
        />
        <OpenTokApp />
        <Button onPress={this.changeName} title="Change Name to James" />
        <Text>{ this.state.name }</Text>
      </View>
    )
  }
}

export default App;

