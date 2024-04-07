import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { GlobalStateProvider } from "./context/GlobalStateContext";
import { SafeAreaViewComponent } from "./components/SafeAreaViewComponent";
import { StackNavigator } from "./components/BottomNavigation";

export default function App() {
  return (
    <GlobalStateProvider>
      <SafeAreaViewComponent>
        {/* <TopBanner /> */}
        <StackNavigator />
      </SafeAreaViewComponent>
    </GlobalStateProvider>
  );
}
