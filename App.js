// App.js
import React from 'react';
import { View, FlatList, Image, Text, StyleSheet } from 'react-native';

const flowerData = [
  { id: '1', name: 'Rose', image: require('./images/tulip.jpeg') },
  { id: '2', name: 'Sunflower', image: require('./images/tulip.jpeg')},
  { id: '3', name: 'Tulip', image: require('./images/tulip.jpeg') },
  { id: '4', name: 'Tulip', image: require('./images/tulip.jpeg') },
  { id: '5', name: 'Tulip', image: require('./images/tulip.jpeg') },
  { id: '6', name: 'Tulip', image: require('./images/tulip.jpeg') },
  // Add more flowers as needed
];

const App = () => {
  const renderFlowerItem = ({ item }) => (
    <View style={styles.flowerContainer}>
      <Image source={item.image} style={styles.flowerImage} />
      <Text style={styles.flowerName}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={flowerData}
        keyExtractor={(item) => item.id}
        renderItem={renderFlowerItem}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  flowerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  flowerImage: {
    width: 150,
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  flowerName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
