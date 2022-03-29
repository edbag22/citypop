import { SafeAreaView, StyleSheet, Text, View, Button, TouchableHighlight} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "./app/screens/homeScreen";
import SearchScreen from "./app/screens/searchScreen";
import ResultScreen from "./app/screens/resultScreen";
import CountriesResultScreen from "./app/screens/countriesResultScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Result" component={ResultScreen} />
        <Stack.Screen name="CountriesResult" component={CountriesResultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
