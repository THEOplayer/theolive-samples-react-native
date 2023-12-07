import { Button, Text, View } from 'react-native';
import * as React from 'react';
import { styles } from '../App';

export const ExampleSelector = (props: {
  channelId: string;
  setSelectedExample: (example: string) => void;
}) => {
  const { channelId, setSelectedExample } = props;
  return (
    <>
      <Text style={styles.text}>Currently selected ChannelId:</Text>
      <Text style={styles.text}>{channelId}</Text>
      <Text style={styles.text}>
        Select one of the examples to get started:
      </Text>
      <View style={styles.buttonRow}>
        <Button
          title={'Basic playback'}
          onPress={() => {
            setSelectedExample('basic');
          }}
        />
        <Button
          title={'UI & fullscreen'}
          onPress={() => {
            setSelectedExample('fullscreen');
          }}
        />
      </View>
    </>
  );
};
