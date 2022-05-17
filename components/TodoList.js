import * as React from 'react'
import { todosData } from '../todos/data';
import { FlatList, Text } from 'react-native';

export const TodoList = () => {

    return (
        <FlatList
            data={todosData}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => <Text>{item.text}</Text> }
        />
        

    
    );
}