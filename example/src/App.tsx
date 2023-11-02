import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import {
  type ChannelLoadedEvent,
  type ErrorEvent,
  type THEOlivePlayer,
  THEOlivePlayerView,
} from '@theolive/react-native-player';

export default function App() {
  React.useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <THEOlivePlayerView
        onPlayerReady={(player: THEOlivePlayer) => {
          // Load your channelId:
          player.loadChannel('my-channel-id');
          // Add optional event listeners:
          player.addEventListener(
            'channelloaded',
            (event: ChannelLoadedEvent) => {
              console.log(`Channel ${event.channelId} has been loaded`);
            }
          );
          player.addEventListener('error', (event: ErrorEvent) => {
            console.log(`Error: ${event.error.message}`);
          });
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
