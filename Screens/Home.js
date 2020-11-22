import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Button, Text, View} from 'react-native';

export default function Home ({ navigation })  {
  const [counter, setCounter] = useState(0);
  const JohnArray = [];

  return (
    <React.Fragment>
      <View style={styles.container}>
        <Button
          title = 'Pluss'
          color = 'green'
          onPress = {() => {setCounter(counter+1);}}
        />
        <Button
          title = 'Minuss'
          color = 'red'
          onPress = {() => {setCounter(counter-1);}}
        />
        <Text>{counter}</Text>
      </View>
      <View style={styles.container}>
        <Button
          title = 'List view'
          color = 'black'
          onPress = {() => navigation.navigate('ListView')}
        />
        <Text>fuck</Text>
        <StatusBar style="auto" />
      </View>
    </React.Fragment>
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
