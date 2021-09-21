import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);

  const handleSubmit = e =>{
    e.preventDefault();
    addTodo(value);
    setValue('');
  };

  const addTodo = value => {
    const newTodo = [...todos, value];
    setTodos(newTodo);
  };

  const handleDelete = index => {
    const deleteTodo = [...todos];
    deleteTodo.splice(index, 1);
    setTodos(deleteTodo);
  };

  return (
    <SafeAreaView style={{marginTop:70}}>
      <Text style={{textAlign:'center', fontWeight:'800'}}>Add an item to the list</Text>
      <TextInput style={styles.input} value={value} onChangeText={text => setValue(text)} />
      <Button title='Add' onPress={handleSubmit}></Button>
      <FlatList
        data = {todos}
        renderItem = {({item, index}) =>
          <View key={index}>
            <Text style={{marginLeft:10}}>
              {item} <Button onPress={() => handleDelete(index)} title="x" />
            </Text>
          </View>
          }
        />
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }

});
