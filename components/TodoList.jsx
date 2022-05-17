import * as React from 'react'
import { todosData } from '../todos/data';
import { FlatList, Text } from 'react-native';
import { Todo } from './Todo'

export const TodoList = () => {

    return (
        <FlatList
            data={todosData}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => <Todo {...item}></Todo> }
        />
    );
}