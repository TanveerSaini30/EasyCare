import React from "react";
import { Text, SafeAreaView, StyleSheet, View } from "react-native";
import List from "./src/screens/List";
import Profile from "./src/screens/Profile";
const main = () => {
  return (
    <SafeAreaView style={{ flex: 1 }} >

      <List />

    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  textstyle: {
    color: "blue",
    fontSize: 40,
    fontStyle: "italic",
    fontWeight: "bold",
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 5,
    padding: 50,
  }
})

export default main;