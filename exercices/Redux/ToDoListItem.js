import React from 'react';
import {Button, Text, View} from 'react-native';

const ToDoListItem = ({data, deleteToDo}) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'grey',
      }}>
      <Text>{data.item.title}</Text>
      <Button title={'Supprimer'} onPress={() => deleteToDo(data)} />
    </View>
  );
};

export default ToDoListItem;
