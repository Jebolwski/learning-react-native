import { useEffect, useState, useRef } from "react";
import { StyleSheet, View, Text, Dimensions, Pressable } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import TodoListItem from "./components/TodoListItem";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const [todos, setTodos] = useState([]);
  const scrollViewRef = useRef<ScrollView>(null);
  const screenHeight = Dimensions.get("window").height;
  const navigation = useNavigation();

  const getData = async (key: any) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        const parsedValue = JSON.parse(value); // Stringi tekrar diziye çeviriyoruz
        setTodos(parsedValue); // Burada parsedValue'yu kullanarak state'i güncelliyoruz
      }
    } catch (e) {
      console.error("Veri okuma hatası:", e);
    }
  };

  const scrollToBottom = () => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  };

  useEffect(() => {
    getData("todos");
    console.log("messi");
  }, []);

  useEffect(() => {
    getData("todos");
    console.log("messi ronaldo");
  }, [navigation]);

  return (
    <View style={{ padding: 10 }}>
      <Text style={{ fontSize: 20, fontWeight: 600 }}>Todos 🚄</Text>
      <Pressable
        style={{
          marginTop: 10,
          marginBottom: 10,
          backgroundColor: "#879005",
          width: 80,
          borderRadius: 6,
          padding: 2,
          shadowColor: "#171717",
          shadowOffset: { width: -2, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 3,
          borderWidth: 1,
          borderColor: "#9a9600",
        }}
        onPress={() => navigation.navigate("addTodo")}
      >
        <Text style={{ color: "white", textAlign: "center" }}>Add a todo</Text>
      </Pressable>

      <ScrollView style={{ height: screenHeight - 135 }} ref={scrollViewRef}>
        {todos.map((todo, index) => {
          return (
            <TodoListItem todo={todo} key={index} func={getData("todos")} />
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 109,
    height: 40,
  },
  button: {
    width: 100,
    height: 40,
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  scroll_div: {
    height: 40,
    backgroundColor: "#aaa",
  },
});
