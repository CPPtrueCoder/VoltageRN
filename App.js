import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {AppHeader} from "./components/appHeader/app-header";
import {NavBar} from "./components/navbar/nav-bar";
import {FirstScreen} from "./components/screens/firstscreen";
import {SecondScreen} from "./components/screens/secondScreen";
import {AlertScreen} from "./components/screens/screenAlert";

export default function App() {
  return (
    <View style={styles.container}>
    <AppHeader/>
    <AlertScreen/>
    <NavBar/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex:1,
   
      justifyContent:"space-between"
  }
});
