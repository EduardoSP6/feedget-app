import { View } from 'react-native';

import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';

import Widget from './src/components/Widget';
import { theme } from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: theme.colors.background
    }}>

      <StatusBar 
        style="light" 
        backgroundColor='transparent'
        translucent
      />

      <Widget />

    </View>
  );
}