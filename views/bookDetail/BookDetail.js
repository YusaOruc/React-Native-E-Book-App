import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  Button,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { ViewComponent } from "../../components/ViewComponent";
import { TextComponent } from "../../components/TextComponent";
import { Ionicons } from "@expo/vector-icons";

//onPress={() => navigation.navigate("ReadBook")} <FontAwesome name="file-audio-o" size={24} color="black" />
export default function BookDetail({ route }) {
  const navigation = useNavigation();
  const { book } = route.params;

  return (
    <ViewComponent
      style={{
        alignItems: "center",
        paddingTop: 20,
      }}
    >
      <Image source={book.path} style={styles.avatar} />
      <TextComponent style={{ fontSize: 20 }}>{book.name}</TextComponent>
      <TextComponent style={{ ...styles.span }}>{book.author}</TextComponent>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          padding: 10,
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.navigate("ReadBook", { book: book })}
          style={{
            marginRight: 40,
            alignItems: "center",
          }}
        >
          <Ionicons name="book" size={40} color="#F38181" />
          <TextComponent>Read</TextComponent>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("AudioPlayer", { book: book })}
          style={{
            alignItems: "center",
          }}
        >
          <Ionicons name="play-circle" size={40} color="#F38181" />
          <TextComponent>Listen</TextComponent>
        </TouchableOpacity>
      </View>
    </ViewComponent>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  avatar: {
    width: "90%",
    height: "80%",
    marginBottom: 3,
    borderRadius: 20,
  },
  card: {
    backgroundColor: "blue",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  span: {
    fontSize: 13,
    color: "#888", // veya istediğiniz açık renk
    fontWeight: "300", // normal veya light font ağırlığı
  },
});
