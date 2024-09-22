import { View, Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from "expo-router";
const Stack = createStackNavigator();

function First() {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="text-red-500 bg-red-500" onPress={()=>{navigation.navigate("Second");}}>Birinci</Text>
      </View>
    );
  }
  
function Second() {
    const navigation = useNavigation();
  return (
    <View className="flex-1 items-center justify-center text-red-500">
      <Text className='bg-green-400' onPress={()=>{navigation.navigate("First");}}>ikinci</Text>
    </View>
  );
}
  

export default function Diff() {
    return (
        <NavigationContainer independent={true}>
          <Stack.Navigator>
            <Stack.Screen name="First" component={First}   />
            <Stack.Screen name="Second" component={Second} />
          </Stack.Navigator>
        </NavigationContainer>
    );
}