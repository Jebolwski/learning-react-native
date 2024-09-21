import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { createStackNavigator } from "@react-navigation/stack";
import { useColorScheme } from '@/hooks/useColorScheme';
import Categories from './views/categories/Categories';
import HomeScreen from './index';
import Meals from './views/meals/Meals';
import MealDetail from './views/meal-detail/MealDetail';
import { DataProvider } from './context/DataContext';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  const Stack = createStackNavigator();
  
  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <DataProvider>
        <Stack.Navigator>
          <Stack.Screen
            name="views/categories/Categories"
            component={Categories}
            options={{ headerShown: true }}

          />
          <Stack.Screen
            name="views/meals/Meals"
            component={Meals}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="views/meal-detail/MealDetail"
            component={MealDetail}
            options={{ headerShown: true }}
          />
        </Stack.Navigator>
      </DataProvider>
    </ThemeProvider>
  );
}
