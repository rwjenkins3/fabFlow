import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ActionButton } from './components/ActionButton';

export default function App() {

  const [counter, setCounter] = useState(0);

  const [mlist, setList] = useState([]);

  const incCounter = () => {
    // Add one to counter
    let c = counter;

    setCounter(c+1);
  }

  const addList = (month) => {
    let current = mlist;

    setList(current.push(month));
  }

  return (
    <View style={styles.container}>
      {/* <Text>{counter}</Text> */}

      { mlist.map((item) => {
        return(<Text>{item}</Text>);
      })}

      <ActionButton pressHandler={addList} />
      <StatusBar style="auto" />
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
});
