import { NavigationContainer } from "@react-navigation/native";
import Liste from "../views/readBook/ReadBook";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function PagesNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Liste" component={Liste} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
