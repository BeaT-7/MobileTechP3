import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { FlatList, StyleSheet, Text, View, Button } from 'react-native';

const JohnList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          {key: 'John Doe 1'},
          {key: 'John Doe 2'},
          {key: 'John Doe 3'},
          {key: 'John Doe 4'},
          {key: 'John Doe 5'},
          {key: 'John Doe 6'},
          {key: 'John Doe 7'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
}

export default function App({ navigation }) {
  return (

    <View style={styles.container}>
      <Button
        title = 'Back'
        color = 'black'
        onPress = {() => navigation.navigate('Home')}
      />
      <JohnList/>
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
