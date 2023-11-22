import * as React from 'react';
import { useState } from 'react';

import { StyleSheet, View } from 'react-native';
import { BasicPlayback } from './examples/BasicPlayback';
import { ExampleSelector } from './examples/ExampleSelector';

const CHANNEL_ID = 'put-your-channel-id-here';

export default function App() {
  const [selectedExample, setSelectedExample] = useState<string | undefined>(
    undefined
  );
  return (
    <View style={styles.container}>
      <ExampleSelector
        channelId={CHANNEL_ID}
        setSelectedExample={setSelectedExample}
      />
      {selectedExample === 'basic' && <BasicPlayback channelId={CHANNEL_ID} />}
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 10,
    paddingTop: 30,
  },
  text: {
    color: 'black',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
  },
});
