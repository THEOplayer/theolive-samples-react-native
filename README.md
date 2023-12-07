# react-native-theolive-samples

Samples for the THEOlive React Native SDK.

## How to run the sample app

### Step 1: Prerequisites

Check out this repository and make sure
your [React Native environment setup](https://reactnative.dev/docs/environment-setup) is complete.

### Step 2: Build

Use yarn to build:

```shell
yarn
```

### Step 3: Run

```shell
yarn example run
```

## Customize

The sample app uses the `THEOlivePlayerView` component to play a THEOlive channel.
It has a `onPlayerReady` callback to signal when the player API is available.

Make sure to replace `my-channel-id` with your actual channel ID:

```tsx
<THEOlivePlayerView
  onPlayerReady={(player: THEOlivePlayer) => {
    // Load your channelId:
    player.loadChannel('my-channel-id');
  }}
/>
```

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
