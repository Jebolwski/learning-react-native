import { useEffect, useState, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  Pressable,
  SafeAreaView,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import TodoListItem from "./components/TodoListItem";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const [todos, setTodos] = useState<any[]>([]);
  const [todosF, setTodosF] = useState<any[]>([]);
  const [todosNF, setTodosNF] = useState<any[]>([]);
  const [activeBtn, setActiveBtn] = useState(0);
  const [current, setCurrent] = useState<any[]>([]);

  const scrollViewRef = useRef<ScrollView>(null);
  const screenHeight = Dimensions.get("window").height;
  const navigation = useNavigation();

  const getData = async (key: any) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        const parsedValue: any[] = JSON.parse(value);
        setTodos(parsedValue);
        let finishedArr = [];
        let notFinishedArr = [];

        notFinishedArr = parsedValue.filter((todo) => {
          return todo.finished == false;
        });

        finishedArr = parsedValue.filter((todo) => {
          return todo.finished == true;
        });
        console.log("bitenler", finishedArr, finishedArr.length);
        console.log("bitmeyenler", notFinishedArr, notFinishedArr.length);
        console.log("====================");

        setTodosF(finishedArr);
        setTodosNF(notFinishedArr);

        setCurrent(parsedValue);
      }
    } catch (e) {
      console.error("Veri okuma hatası:", e);
    }
  };

  const scrollToBottom = () => {
    scrollViewRef.current?.scrollToEnd({ animated: true });
  };

  const setFinishedTodos = () => {
    setCurrent(todosF);
  };

  const setNotFinishedTodos = () => {
    setCurrent(todosNF);
  };

  const setAllTodos = () => {
    setCurrent(todos);
  };

  useEffect(() => {
    getData("todos");
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      getData("todos");
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: 20,
        paddingLeft: 6,
        paddingRight: 6,
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "600" }}>Todos 🚄</Text>
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
        onPress={() => {
          navigation.navigate("addTodo");
        }}
      >
        <Text style={{ color: "white", textAlign: "center" }}>Add a todo</Text>
      </Pressable>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 10,
          marginTop: -10,
        }}
      >
        <Pressable
          style={[
            {
              marginTop: 10,
              marginBottom: 10,
              backgroundColor: "#ddd",
              width: 100,
              borderRadius: 6,
              padding: 2,
              shadowColor: "#171717",
              shadowOffset: { width: -2, height: 4 },
              shadowOpacity: 0.2,
              shadowRadius: 3,
              borderWidth: 1,
              borderColor: "#aaa",
            },
            activeBtn == 0 ? styles.activeBtn : null,
          ]}
          onPress={() => {
            setAllTodos();
            setActiveBtn(0);
          }}
        >
          <Text style={{ color: "black", textAlign: "center" }}>All Todos</Text>
        </Pressable>
        <Pressable
          style={[
            {
              marginTop: 10,
              marginBottom: 10,
              backgroundColor: "#ddd",
              width: 100,
              borderRadius: 6,
              padding: 2,
              shadowColor: "#171717",
              shadowOffset: { width: -2, height: 4 },
              shadowOpacity: 0.2,
              shadowRadius: 3,
              borderWidth: 1,
              borderColor: "#aaa",
            },
            activeBtn == 1 ? styles.activeBtn : null,
          ]}
          onPress={() => {
            setFinishedTodos();
            setActiveBtn(1);
          }}
        >
          <Text style={{ color: "black", textAlign: "center" }}>Finished</Text>
        </Pressable>
        <Pressable
          style={[
            {
              marginTop: 10,
              marginBottom: 10,
              backgroundColor: "#ddd",
              width: 100,
              borderRadius: 6,
              padding: 2,
              shadowColor: "#171717",
              shadowOffset: { width: -2, height: 4 },
              shadowOpacity: 0.2,
              shadowRadius: 3,
              borderWidth: 1,
              borderColor: "#aaa",
            },
            activeBtn == 2 ? styles.activeBtn : null,
          ]}
          onPress={() => {
            setNotFinishedTodos();
            setActiveBtn(2);
          }}
        >
          <Text style={{ color: "black", textAlign: "center" }}>
            Not finished
          </Text>
        </Pressable>
      </View>
      <ScrollView style={{ height: screenHeight - 135 }} ref={scrollViewRef}>
        {current.map((todo, index) => {
          return (
            <TodoListItem
              todo={todo}
              key={index}
              func={() => getData("todos")}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  activeBtn: {
    backgroundColor: "#ccc",
  },
});
