import React from "react";
import { FlatList, Image, StyleSheet, Text } from "react-native";
import { ViewComponent } from "../../components/ViewComponent";
import BookItem from "../../components/BookItem";
import { useNavigation } from "@react-navigation/native";
import { books } from "../home/BookList";

const FavoriteBooks = () => {
  const navigation = useNavigation();

  return (
    <ViewComponent style={styles.container}>
      <FlatList
        data={books}
        renderItem={({ item }) => (
          <BookItem item={item} navigation={navigation} />
        )}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{ padding: 5 }}
        showsVerticalScrollIndicator={false} // Scroll bar'ı gizler
        numColumns={2}
      />
    </ViewComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default FavoriteBooks;
