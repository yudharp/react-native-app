import React from "react";
import { View, Image, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import Carousel from "react-native-snap-carousel";

const ImageTextButtonLayout = ({ title, buttonText, onPressButton }) => {
  const carouselItems = [
    {
      id: 1,
      image: require("./src/assets/img/tower-bank-syariah-indonesia-bsi-istimewa_169.png"),
      caption: "Gedungnya",
    },
    {
      id: 2,
      image: require("./src/assets/img/tower-bank-syariah-indonesia-bsi-istimewa_169.png"),
      caption: "ya gedung lagi",
    },
    // Add more items as needed
  ];

  const renderCarouselItem = ({ item }) => (
    <View style={styles.carouselItem}>
      <Image
        style={styles.carouselImage}
        source={item.image}
        resizeMode="cover"
      />
      <Text style={styles.carouselCaption}>{item.caption}</Text>
    </View>
  );

  return (
      <View style={styles.container}>
        <Carousel
          data={carouselItems}
          renderItem={renderCarouselItem}
          sliderWidth={300}
          itemWidth={300}
          loop={true}
        />

        <Text style={styles.title}>{title} Rugi Dong </Text>
        <TouchableOpacity style={styles.button} onPress={onPressButton}>
          <Text style={styles.buttonText}>{buttonText}Yang Bener Aja</Text>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  carouselItem: {
    borderRadius: 8,
    overflow: "hidden",
  },
  carouselImage: {
    width: 300,
    height: 200,
  },
  carouselCaption: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 8,
    backgroundColor: "rgba(0,0,0,0.5)",
    color: "white",
    textAlign: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#00A39D",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#F7AD3D",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ImageTextButtonLayout;