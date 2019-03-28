import React, { Component } from 'react';
import { View, StyleSheet, Button, Dimensions } from 'react-native';
import { RNCamera } from 'react-native-camera';

class CameraApp extends Component {
  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log('image data uri', data.base64);
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
        />
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
          <Button onPress={this.takePicture} style={styles.capture} title="SNAP" />
        </View>
      </View>
    )
  }
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: width/2,
    height: height/3,
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20,
  },
});
export default CameraApp;

