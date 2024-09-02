import React, { useState } from "react";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  Button,
  SafeAreaView,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "expo-router";

export default function AddTodo() {
  const [titleLength, setTitleLength] = useState(0);
  const [descLength, setDescLength] = useState(0);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const navigation = useNavigation();

  const addTodo = async (key: string, newItem: any) => {
    try {
      const existingData = await AsyncStorage.getItem(key);
      let dataArray = [];

      if (existingData !== null) {
        dataArray = JSON.parse(existingData);
      }

      newItem.id = dataArray?.length;

      dataArray.push(newItem);

      const jsonValue = JSON.stringify(dataArray);
      await AsyncStorage.setItem(key, jsonValue);
      setDesc("");
      setTitle("");
      setDescLength(0);
      setTitleLength(0);
      navigation.navigate("index");
    } catch (e) {
      console.error("Veri ekleme hatası:", e);
    }
  };

  return (
    <SafeAreaView
      style={{ flex: 1, paddingTop: 20, paddingLeft: 6, paddingRight: 6 }}
    >
      <View style={styles.main_div}>
        <Text style={styles.title}>Add a Todo</Text>
        <View>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              flexDirection: "row",
            }}
          >
            <View>
              <FontAwesome5 name="heading" size={16} color="black" />
            </View>
            <Text>Title</Text>
          </View>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={(text) => {
              setTitleLength(text.length);
              setTitle(text);
            }}
          ></TextInput>
          <Text>{titleLength}/160</Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <View
            style={{
              display: "flex",
              alignItems: "center",
              gap: 4,
              flexDirection: "row",
            }}
          >
            <View>
              <MaterialIcons name="details" size={16} color="black" />
            </View>
            <Text>Description</Text>
          </View>
          <TextInput
            style={styles.input}
            value={desc}
            onChangeText={(text) => {
              setDescLength(text.length);
              setDesc(text);
            }}
          ></TextInput>
        </View>
        <Text>{descLength}/160</Text>
        <View style={styles.add_button}>
          <Button
            title="add"
            color={"#879005"}
            onPress={() => {
              addTodo("todos", { title: title, description: desc });
            }}
          ></Button>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  main_div: {
    padding: 10,
  },
  title: {
    paddingTop: 10,
    paddingBottom: 10,
    fontWeight: "600",
    fontSize: 18,
  },
  add_button: {
    width: 130,
    height: 40,
    padding: 0,
    marginTop: 10,
    borderRadius: 30,
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
  },
});
