import { Text } from 'react-native';
import { styles } from '../App';
import React from 'react';

export const Title = (props: { name: string }) => {
  const { name } = props;
  return (
    <>
      <Text style={styles.text}>The below example is from</Text>
      <Text style={styles.text}>{name}</Text>
    </>
  );
};
