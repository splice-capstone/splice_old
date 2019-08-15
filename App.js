import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Platform,
  Image,
  Text,
  View,
  ScrollView
} from "react-native";

import firebase from "react-native-firebase";
import db, {userInit} from './src/tools/firebase'

const App = () => {
  const [user, setUser]= useState({})

  const initStuff = async () => {
    await userInit()
    const userDoc = await db.collection('users').doc('f9ArtRIEWMHokxUxWxLg').get()
    console.log(userDoc.data())
    setUser(userDoc.data())

  }

  useEffect(() => {
    initStuff()
  }, [])

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.welcome}>hiasdfasdfasdfasdf</Text>
        <Text style={styles.welcome}>hiasdfasdfasdfasdf</Text>

        <Text style={styles.welcome}>user's name: {user.name}</Text>

      </View>
    </ScrollView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  logo: {
    height: 120,
    marginBottom: 16,
    marginTop: 64,
    padding: 10,
    width: 135
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  modules: {
    margin: 20
  },
  modulesHeader: {
    fontSize: 16,
    marginBottom: 8
  },
  module: {
    fontSize: 14,
    marginTop: 4,
    textAlign: "center"
  }
});
