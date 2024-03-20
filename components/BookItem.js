import { View, FlatList, Image, StyleSheet, Text } from "react-native";
import { TextComponent } from "./TextComponent";

const BookItem = ({ item }) => (
  <View style={{ ...styles.card }}>
    <Image source={item.path} style={styles.avatar} />
    <TextComponent>{item.name}</TextComponent>
    <TextComponent style={{ ...styles.span }}>{item.author}</TextComponent>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  avatar: {
    width: 163,
    height: 250,
    marginBottom: 3,
    borderRadius: 20,
  },
  card: {
    width: 180,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  span: {
    fontSize: 10,
    color: "#888", // veya istediğiniz açık renk
    fontWeight: "300", // normal veya light font ağırlığı
  },
});

export default BookItem;
