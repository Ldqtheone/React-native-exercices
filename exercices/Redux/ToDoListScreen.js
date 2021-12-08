import React, {useState, useMemo, useCallback, useEffect} from 'react';

import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

import ToDoListItem from './ToDoListItem';
import {todoActions, ADD_TODO, REMOVE_TODO} from './redux/actions';
import {useDispatch, useSelector} from 'react-redux';

const ToDoListScreen = () => {
  const [searchValue, setSearchValue] = useState('');
  const [toDoInput, setToDoInput] = useState('');
  const dispatch = useDispatch();
  const toDoList = useSelector(state => state.todoReducer.todoList);

  useEffect(() => {}, [toDoList]);

  const renderFlatList = (item, index) => {
    return (
      <View key={index}>
        <ToDoListItem data={item} deleteToDo={deleteToDo} />
      </View>
    );
  };

  const deleteToDo = useCallback(
    item => {
      dispatch(
        todoActions({
          type: REMOVE_TODO,
          todo: toDoList.filter(v => v.title !== item.item.title),
        }),
      );
    },
    [toDoList],
  );

  const dataFiltered = useMemo(() => {
    if (searchValue !== '') {
      return toDoList.filter(v => v.title.includes(searchValue));
    }

    return toDoList;
  }, [searchValue, toDoList]);

  const addToDo = useCallback(() => {
    dispatch(
      todoActions({
        type: ADD_TODO,
        todo: [...toDoList, {title: toDoInput}],
      }),
    );

    console.log('Store after add : ', toDoList);
  }, [toDoList, toDoInput]);

  return (
    <SafeAreaView>
      <TextInput
        placeholder="Rechercher..."
        style={styles.inputs}
        value={searchValue}
        onChangeText={e => setSearchValue(e)}
      />
      <FlatList
        data={dataFiltered}
        renderItem={(item, index) => {
          return renderFlatList(item, index);
        }}
      />
      <View>
        <TextInput
          placeholder="A faire..."
          value={toDoInput}
          onChangeText={e => setToDoInput(e)}
        />
        <Button title={'Ajouter'} onPress={() => addToDo()} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputs: {},
});

export default ToDoListScreen;
