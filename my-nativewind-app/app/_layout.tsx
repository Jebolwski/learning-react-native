import { DarkTheme, DefaultTheme, NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useColorScheme } from '@/hooks/useColorScheme';
import Diff from './Diff/Diff';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-red-500 bg-red-500">Home! aa</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View className="flex-1 items-center justify-center text-red-500">
      <Text className='bg-green-400'>Settings!as</Text>
    </View>
  );
}

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  const Tab = createBottomTabNavigator();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <NavigationContainer independent={true}>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen}   />
          <Tab.Screen name="Settings" component={SettingsScreen} />
          <Tab.Screen name="Diff" component={Diff} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
