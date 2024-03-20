import React from "react";
import { View, FlatList, Image, StyleSheet, Text } from "react-native";
import { TextComponent } from "../../components/TextComponent";
import { ViewComponent } from "../../components/ViewComponent";
import BookItem from "../../components/BookItem";

const dummyData = [
  {
    path: require("../../assets/bookIcons/a.png"),
    name: "To Kill a Mockingbird",
    author: "Harper Lee",
  },
  {
    path: require("../../assets/bookIcons/b.png"),
    name: "1984",
    author: "George Orwell",
  },
  {
    path: require("../../assets/bookIcons/c.png"),
    name: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
  },
  {
    path: require("../../assets/bookIcons/d.png"),
    name: "Pride and Prejudice",
    author: "Jane Austen",
  },
  {
    path: require("../../assets/bookIcons/e.png"),
    name: "The Catcher in the Rye",
    author: "J.D. Salinger",
  },
];

const FavoriteBooks = () => {
  return (
    <ViewComponent>
      <FlatList
        data={dummyData}
        renderItem={BookItem}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.container}
        showsHorizontalScrollIndicator={false} // Scroll bar'ı gizler
        numColumns={2}
      />
    </ViewComponent>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
});

export default FavoriteBooks;
