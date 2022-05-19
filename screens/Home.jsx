import { View, Text, StyleSheet, StatusBar} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import * as React from 'react'
import { TodoList } from '../components/TodoList'

export const Home = () => {
  return (
    <SafeAreaView>
      <TodoList></TodoList>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    statusBar: {
      marginTop: StatusBar.currentHeight,
    },
  });
  