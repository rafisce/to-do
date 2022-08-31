import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

const ToDo = ({ toDo, index, onDelete }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
        <Text style={{ color: "#ffffff" }}>delete</Text>
      </TouchableOpacity>
      <Text style={styles.text}>{toDo ? toDo : ""}</Text>
    </View>
  );
};

export default ToDo;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(0,0,255,0.2)}",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    margin: 2,
    borderRadius: 5,
  },
  text: {
    flex: 7,
    color: "white",
    fontSize: 18,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  deleteButton: {
    flex: 1,
    backgroundColor: "red",
    borderRadius: 5,
    marginLeft: 5,
    padding: 2,
  },
});
