import {
  type ChannelLoadedEvent,
  type ErrorEvent,
  type THEOlivePlayer,
  THEOlivePlayerView,
} from '@theolive/react-native-player';
import * as React from 'react';
import { Title } from './Title';

export const BasicPlayback = (props: { channelId: string }) => {
  const { channelId } = props;
  return (
    <>
      <Title name={'examples/BasicPlayback.tsx'} />
      <THEOlivePlayerView
        onPlayerReady={(player: THEOlivePlayer) => {
          // Load your channelId:
          player.loadChannel(channelId);
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
    </>
  );
};
