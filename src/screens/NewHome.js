import {View, Text,StatusBar} from 'react-native';
import React from 'react';

export default function Home() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
       <StatusBar
        animated={true}
        backgroundColor="#6505a4"
       />
      <Text>Home</Text>
    </View>
  );
}
