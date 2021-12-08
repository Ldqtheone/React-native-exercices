import React from 'react';
import {View, Text, Button} from 'react-native';

const Info = ({route, navigation}) => {
  console.log(route);
  return (
    <View>
      <Text>{route.params}</Text>
      <Button title={'Retour'} onPress={() => navigation.goBack()}></Button>
    </View>
  );
};

export default Info;
