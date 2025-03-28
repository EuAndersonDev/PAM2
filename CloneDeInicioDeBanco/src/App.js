import React from "react";
import Nav from './components/nav/nav.jsx';
import Card from './components/card/card.jsx';
import { View } from "react-native";
import styles from "./components/style.js";

export default function App() {
  return (
    <View style={styles.container}>
      <Nav />
      <Card />
    </View>
  );
}

