import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import styles from "../style";

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.balanceCard}>
        <Text style={styles.balanceTitle}>Lorem ipsum dolot</Text>
        <Text style={styles.balanceAmount}>$236,678.25</Text>
        <FontAwesome name="cog" size={20} color="black" style={styles.settingsIcon} />
      </View>

      <View style={styles.navButtons}>
        <TouchableOpacity style={styles.button}>
          <FontAwesome name="search" size={24} color="black" />
          <Text style={styles.buttonText}>Lorem</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <FontAwesome name="bar-chart" size={24} color="black" />
          <Text style={styles.buttonText}>Ipsum</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <FontAwesome name="cog" size={24} color="black" />
          <Text style={styles.buttonText}>Dolor</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}