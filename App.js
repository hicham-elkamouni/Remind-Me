import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { TodoList } from './components/TodoList';

export default function App() {
  return (
    <View style={[ styles.statusBar ]}>
      <TodoList/>
    </View>
  );
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
