import React from 'react';

import {StyleSheet, View} from 'react-native';

//test
const Exo1 = () => {
  return (
    <View style={styles.flex1}>
      <View style={styles.red} />
      <View style={styles.viewGen}>
        <View style={styles.square} />
        <View style={styles.square} />
        <View style={styles.square} />
      </View>
      <View style={styles.blue} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  square: {
    backgroundColor: 'yellow',
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 2.5,
    width: 50,
    height: 50,
  },
  viewGen: {
    flex: 1,
    backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  flex1: {
    flexDirection: 'column',
    flex: 1,
  },
  blue: {
    flex: 3,
    backgroundColor: 'blue',
  },
  red: {
    flex: 1,
    backgroundColor: 'red',
  },
});

export default Exo1;
