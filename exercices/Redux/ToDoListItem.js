import React from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';

const ToDoListItem = ({data, deleteToDo, navigation}) => {
  console.log(navigation);
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Info', data)}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: 'grey',
        }}>
        <Text>{data.item.title}</Text>
        <Button title={'Subprime'} onPress={() => deleteToDo(data)} />
      </View>
    </TouchableOpacity>
  );
};

export default ToDoListItem;
