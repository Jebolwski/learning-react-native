import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (key: any, value: any) => {
  try {
    const jsonValue = JSON.stringify(value); // Diziyi JSON string'e çeviriyoruz
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.error("Veri kaydetme hatası:", e);
  }
};

// Kullanımı
storeData("todos", [
  { id: 0, title: "title1", description: "description1", finished: false },
  { id: 1, title: "title2", description: "description2", finished: false },
]);
