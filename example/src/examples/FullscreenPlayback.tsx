import {
  type PresentationMode,
  type THEOlivePlayer,
  THEOlivePlayerView,
} from '@theolive/react-native-player';
import * as React from 'react';
import { useState } from 'react';
import { Title } from './Title';
import { Button, StyleSheet, View } from 'react-native';

export const FullscreenPlayback = (props: {
  channelId: string;
  fullscreen: boolean;
  setFullscreen: (fullscreen: boolean) => void;
}) => {
  const { channelId, fullscreen, setFullscreen } = props;
  const [player, setPlayer] = useState<THEOlivePlayer | undefined>();
  useState<PresentationMode>('inline');
  return (
    <>
      {/* Make sure to hide unrelated components when the player goes fullscreen.*/}
      {!fullscreen && <Title name={'examples/FullscreenPlayback.tsx'} />}
      <THEOlivePlayerView
        onPlayerReady={(player: THEOlivePlayer) => {
          player.loadChannel(channelId);
          setPlayer(player);
        }}
      >
        {/* This demonstrates how to create a 'basic' player UI with a fullscreen button.*/}
        <BasicPlayerUi player={player} setFullscreen={setFullscreen} />
      </THEOlivePlayerView>
    </>
  );
};

const BasicPlayerUi = (props: {
  player: THEOlivePlayer | undefined;
  setFullscreen: (fullscreen: boolean) => void;
}) => {
  const { player, setFullscreen } = props;
  return (
    <View style={[StyleSheet.absoluteFill, uiStyles.ui]}>
      <View style={uiStyles.controlBar}>
        <FullscreenButton player={player} setFullscreen={setFullscreen} />
      </View>
    </View>
  );
};

const FullscreenButton = (props: {
  player: THEOlivePlayer | undefined;
  setFullscreen: (fullscreen: boolean) => void;
}) => {
  const { player, setFullscreen } = props;
  return (
    <View style={uiStyles.button}>
      <Button
        title={'fullscreen'}
        onPress={() => {
          if (player) {
            if (player.presentation?.currentMode === 'fullscreen') {
              player.presentation?.requestMode('inline');
              setFullscreen(false);
            } else {
              player.presentation?.requestMode('fullscreen');
              setFullscreen(true);
            }
          }
        }}
      />
    </View>
  );
};

const uiStyles = StyleSheet.create({
  ui: {
    flexDirection: 'column-reverse',
  },
  controlBar: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    width: 120,
  },
});
