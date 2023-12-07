import * as React from 'react';
import { useState } from 'react';

import { SafeAreaView, StyleSheet } from 'react-native';
import { BasicPlayback } from './examples/BasicPlayback';
import { ExampleSelector } from './examples/ExampleSelector';
import { FullscreenPlayback } from './examples/FullscreenPlayback';

const CHANNEL_ID = 'put-your-channel-id-here';

export default function App() {
  const [fullscreen, setFullscreen] = useState(false);
  const [selectedExample, setSelectedExample] = useState<string | undefined>(
    undefined
  );
  return (
    <SafeAreaView style={styles.container}>
      {/* Make sure to hide unrelated components when the player goes fullscreen.*/}
      {!fullscreen && (
        <ExampleSelector
          channelId={CHANNEL_ID}
          setSelectedExample={setSelectedExample}
        />
      )}
      {selectedExample === 'basic' && <BasicPlayback channelId={CHANNEL_ID} />}
      {selectedExample === 'fullscreen' && (
        <FullscreenPlayback
          channelId={CHANNEL_ID}
          fullscreen={fullscreen}
          setFullscreen={setFullscreen}
        />
      )}
    </SafeAreaView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
  },
  text: {
    color: 'black',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
  },
});
