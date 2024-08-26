import AsyncStorage from "@react-native-async-storage/async-storage";

const storeData = async (key: any, value: any) => {
  try {
    const jsonValue = JSON.stringify(value); // Diziyi JSON string'e çeviriyoruz
    await AsyncStorage.setItem(key, jsonValue);
    console.log("Veri kaydedildi.");
  } catch (e) {
    console.error("Veri kaydetme hatası:", e);
  }
};

// Kullanımı
storeData("todos", [
  { id: 0, title: "title1", description: "description1", finished: false },
  { id: 1, title: "title2", description: "description2", finished: false },
  { id: 2, title: "title3", description: "description3", finished: false },
  { id: 3, title: "title4", description: "description4", finished: false },
  { id: 4, title: "title5", description: "description5", finished: false },
  { id: 5, title: "title6", description: "description6", finished: false },
]);
