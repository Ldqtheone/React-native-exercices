/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';

import {PersistGate} from 'redux-persist/integration/react';
import {persistor} from './exercices/Redux/redux/store';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './Routes';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const App: () => Node = () => {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </PersistGate>
  );
};

export default App;
