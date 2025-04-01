import React from "react";
import { View, Text } from "react-native";
import styles from "../style";

export default function Summary() {
  return (
    <View style={styles.summary}>
      <View style={styles.income}>
        <View style={[styles.dot, { backgroundColor: "red" }]} />
        <Text style={styles.summaryTitle}>INCOMES</Text>
        <Text style={styles.summaryAmount}>$267</Text>
      </View>
      <View style={styles.expenses}>
        <View style={[styles.dot, { backgroundColor: "black" }]} />
        <Text style={styles.summaryTitle}>EXPENSES</Text>
        <Text style={styles.summaryAmount}>$255</Text>
      </View>
    </View>
  );
}