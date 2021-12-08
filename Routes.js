import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Info from './exercices/Redux/Info';
import Exo5 from './exercices/Redux/Exo5';
import Exo4 from './exercices/Exo4';
import Exo1 from './exercices/Exo1';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const infoNav = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={'Info'} component={Info} />
      <Stack.Screen name={'Home'} component={Exo5} />
    </Stack.Navigator>
  );
};

const Routes = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name={'Home'} component={infoNav} />
      <Tab.Screen name={'Login'} component={Exo4} />
      <Tab.Screen name={'Flex'} component={Exo1} />
    </Tab.Navigator>
  );
};
export default Routes;
