import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { Notifications } from 'sdk-uimobile';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Native app</Text>
      <Notifications title='Hello' />
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
