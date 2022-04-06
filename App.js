import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePresenter from "./app/presenters/homePresenter";
import SearchPresenter from "./app/presenters/searchPresenter";
import ResultPresenter from "./app/presenters/resultPresenter";
import CountriesResultPresenter from "./app/presenters/countriesResultPresenter";

const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePresenter} />
        <Stack.Screen name="Search" component={SearchPresenter} />
        <Stack.Screen name="Result" component={ResultPresenter} />
        <Stack.Screen name="Country" component={CountriesResultPresenter} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
