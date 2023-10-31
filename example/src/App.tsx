import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import {
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
          void player.loadChannel('my-channel-id');
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
