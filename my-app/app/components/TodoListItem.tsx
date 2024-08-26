import { StyleSheet, View, Text, Button, Modal } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
const TodoListItem = (props: any) => {
  const [todo, setTodo] = useState<any>([]);
  const [visible, setVisible] = useState(false);

  const navigation = useNavigation();

  const toggleTodo = async (id: any) => {
    try {
      const value = await AsyncStorage.getItem("todos");
      if (value !== null) {
        const parsedValue: any[] = JSON.parse(value); // Stringi tekrar diziye çeviriyoruz
        let x = parsedValue.filter((todo) => {
          return todo.id == id;
        });
        let todo: any = x[0];
        todo.finished = !todo.finished;
        setTodo(todo);
        const jsonValue = JSON.stringify(parsedValue);
        await AsyncStorage.setItem("todos", jsonValue);
      }
    } catch (e) {
      console.error("Veri okuma hatası:", e);
    }
  };
  const toggleModal = () => {
    setVisible(!visible);
  };

  const deleteTodo = async () => {
    try {
      const value = await AsyncStorage.getItem("todos");
      if (value !== null) {
        const parsedValue: any[] = JSON.parse(value); // Stringi tekrar diziye çeviriyoruz
        let new_data = parsedValue.filter((todo) => {
          return todo.id != props.todo.id;
        });
        const jsonValue = JSON.stringify(new_data);
        await AsyncStorage.setItem("todos", jsonValue).then(() => {
          toggleModal();
          props.func;
        });
      }
    } catch (e) {
      console.error("Veri okuma hatası:", e);
    }
  };

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("singleTodo", { id: props.todo.id })}
      style={styles.todo}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text>{props.todo?.title}</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 15,
            justifyContent: "space-evenly",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              toggleModal();
            }}
          >
            <AntDesign name="delete" size={16} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              toggleTodo(props.todo.id);
            }}
          >
            {todo.finished ? (
              <FontAwesome5 name="flag-checkered" size={16} color="green" />
            ) : (
              <FontAwesome5 name="flag-checkered" size={16} color="gray" />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <Modal visible={visible} animationType="slide" style={{ height: 30 }}>
        <Text style={{ textAlign: "center", marginTop: 35, fontSize: 17 }}>
          Would you like to delete todo called '{props.todo?.title}'?
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: 15,
            marginTop: 20,
          }}
        >
          <Button title="Close" onPress={toggleModal} color={"green"}></Button>
          <Button title="Delete" color={"red"} onPress={deleteTodo}></Button>
        </View>
      </Modal>
      <Text>{props.todo?.description}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    padding: 10,
    borderWidth: 1,
    backgroundColor: "#eee",
    borderColor: "#aaa",
    borderRadius: 4,
    marginTop: 5,
    marginBottom: 5,
  },
});

export default TodoListItem;
