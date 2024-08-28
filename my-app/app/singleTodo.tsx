import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Modal,
  Button,
} from "react-native";
import { useEffect, useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { useNavigation } from "@react-navigation/native";

const SingleTodo = () => {
  const route = useRoute();
  const [todo, setTodo] = useState<any>();
  const x = route.params?.id;
  const navigation = useNavigation();
  const [visible, setVisible] = useState(false);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("todos");
      if (value !== null) {
        const parsedValue: any[] = JSON.parse(value); // Stringi tekrar diziye çeviriyoruz
        let filtered = parsedValue.filter((todo) => {
          return todo.id == x;
        });

        setTodo(filtered[0]); // Burada parsedValue'yu kullanarak state'i güncelliyoruz
      }
    } catch (e) {
      console.error("Veri okuma hatası:", e);
    }
  };
  const toggleModal = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    getData();
  }, []);
  const deleteTodo = async () => {
    try {
      const value = await AsyncStorage.getItem("todos");
      if (value !== null) {
        const parsedValue: any[] = JSON.parse(value);
        let new_data = parsedValue.filter((x) => {
          return x.id != todo.id;
        });
        const jsonValue = JSON.stringify(new_data);
        await AsyncStorage.setItem("todos", jsonValue).then(async () => {
          navigation.goBack();
        });
      }
    } catch (e) {
      console.error("Veri okuma hatası:", e);
    }
  };
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

  return (
    <View style={{ padding: 10 }}>
      <View style={styles.todo}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontWeight: 600, fontSize: 20 }}>{todo?.title}</Text>
          <TouchableOpacity
            onPress={() => {
              toggleModal();
            }}
          >
            <AntDesign name="delete" size={16} color="red" />
          </TouchableOpacity>
        </View>
        <Modal visible={visible} animationType="slide" style={{ height: 30 }}>
          <Text style={{ textAlign: "center", marginTop: 35, fontSize: 17 }}>
            Would you like to delete todo called '{todo?.title}'?
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
            <Button
              title="Close"
              onPress={toggleModal}
              color={"green"}
            ></Button>
            <Button title="Delete" color={"red"} onPress={deleteTodo}></Button>
          </View>
        </Modal>
        <Text style={{ fontWeight: 400, fontSize: 16, marginTop: 4 }}>
          {todo?.description}
        </Text>
        <Text
          style={{ fontWeight: 400, fontSize: 16, marginTop: 4 }}
          onPress={() => {
            toggleTodo(todo.id);
          }}
        >
          {todo?.finished.toString() == "true" ? (
            <Text style={{ display: "flex", alignItems: "center" }}>
              Finished{"  "}
              <FontAwesome5 name="flag-checkered" size={16} color="green" />
            </Text>
          ) : (
            <Text style={{ display: "flex", alignItems: "center" }}>
              Not Finished{"  "}
              <FontAwesome5 name="flag-checkered" size={16} color="red" />
            </Text>
          )}
        </Text>
      </View>
    </View>
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
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 5,
  },
});

export default SingleTodo;
