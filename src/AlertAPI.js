import React, { Component } from 'react';
import { View, Button, Alert } from 'react-native';

class AlertAPI extends Component {
  showAlert = () => {
    Alert.alert('This is the coolest alert ever.');
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button onPress={this.showAlert} title="Show iOS Alert" />
      </View>
    )
  }
}
export default AlertAPI;

