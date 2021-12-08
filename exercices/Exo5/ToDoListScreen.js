import React, {useState, useEffect, useMemo, useCallback} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

import ToDoListItem from './ToDoListItem';

const ToDoListScreen = () => {
  const [tableItem, settableItem] = useState([{title: 'Cogner Francesco'}]);
  const [searchValue, setSearchValue] = useState('');
  const [toDoInput, setToDoInput] = useState('');
  const [dataStorage, setDataStorage] = useState([]);

  useEffect(() => {
    async function saveDataInStorage() {
      const json = JSON.stringify(tableItem);
      await AsyncStorage.setItem('toDoDatas', json);
    }

    saveDataInStorage();
  }, [tableItem, dataStorage]);

  const loadDatasFromStorage = async () => {
    const json = await AsyncStorage.getItem('toDoDatas');
    return JSON.parse(json);
  };

  const renderFlatList = (item, index) => {
    console.log('Flat : ', item);
    return (
      <View key={index}>
        <ToDoListItem data={item} deleteToDo={deleteToDo} />
      </View>
    );
  };

  const deleteToDo = useCallback(
    item => {
      settableItem(tableItem.filter(v => v.title !== item.item.title));
    },
    [tableItem],
  );

  const dataFiltered = useMemo(async () => {
    const arrayDatas = await loadDatasFromStorage();
    console.log('Storage : ', arrayDatas);

    if (searchValue !== '') {
      return arrayDatas.filter(v => v.title.includes(searchValue));
    }

    setDataStorage(arrayDatas);

    return arrayDatas;
  }, [tableItem, searchValue]);

  const addToDo = useCallback(() => {
    settableItem([...tableItem, {title: toDoInput}]);
  }, [tableItem, toDoInput]);

  return (
    <SafeAreaView>
      <TextInput
        placeholder="Rechercher..."
        style={styles.inputs}
        value={searchValue}
        onChangeText={e => setSearchValue(e)}
      />
      <FlatList
        data={dataStorage}
        renderItem={(item, index) => {
          console.log('Item in flat : ', item);
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
