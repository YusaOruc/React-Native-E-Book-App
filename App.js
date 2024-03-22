import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { GlobalStateProvider } from "./context/GlobalStateContext";
import { SafeAreaViewComponent } from "./components/SafeAreaViewComponent";
import TopBanner from "./components/topBanner/TopBanner";
import BottomNavigation, {
  StackNavigator,
} from "./components/BottomNavigation";
import PagesNavigation from "./components/PagesNavigation";
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
});
