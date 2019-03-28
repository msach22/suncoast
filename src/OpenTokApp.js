import React, { Component } from 'react';
import { View } from 'react-native';
import { OTSession, OTPublisher, OTSubscriber } from 'opentok-react-native';
import { apiKey, sessionId, token } from '../config';

class OpenTokApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
        <OTSession apiKey={apiKey} sessionId={sessionId} token={token}>
          <OTPublisher style={{ width: 100, height: 100 }} />
          <OTSubscriber style={{ width: 100, height: 100 }} />
        </OTSession>
      </View>
    );
  }
}

export default OpenTokApp;