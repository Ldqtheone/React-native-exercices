import React from 'react';
import {View, Text, Button} from 'react-native';

const Info = ({route, navigation}) => {
  console.log('Route : ', route.params);
  return (
    <View>
      <Text>{route.params.item.title}</Text>
      <Button title={'Retour'} onPress={() => navigation.goBack()} />
    </View>
  );
};

export default Info;
