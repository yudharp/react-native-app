// import React, { useState } from 'react';
// import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

// const CalculatorApp = () => {
//   const [num1, setNum1] = useState('');
//   const [num2, setNum2] = useState('');
//   const [result, setResult] = useState('');

//   const calculate = (operation) => {
//     const number1 = parseFloat(num1);
//     const number2 = parseFloat(num2);
//     let res = 0;

//     switch (operation) {
//       case '+':
//         res = number1 + number2;
//         break;
//       case '-':
//         res = number1 - number2;
//         break;
//       case '*':
//         res = number1 * number2;
//         break;
//       case '/':
//         res = number1 / number2;
//         break;
//       default:
//         res = 0;
//     }

//     setResult(res.toString());
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Enter number 1"
//         value={num1}
//         onChangeText={(text) => setNum1(text)}
//         keyboardType="numeric"
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Enter number 2"
//         value={num2}
//         onChangeText={(text) => setNum2(text)}
//         keyboardType="numeric"
//       />
//       <View style={styles.buttonContainer}>
//         <Button title="+" onPress={() => calculate('+')} />
//         <Button title="-" onPress={() => calculate('-')} />
//         <Button title="*" onPress={() => calculate('*')} />
//         <Button title="/" onPress={() => calculate('/')} />
//       </View>
//       <Text style={styles.result}>{result}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   input: {
//     width: 200,
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     margin: 10,
//     padding: 5,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     margin: 10,
//   },
//   result: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     margin: 10,
//   },
// });

// export default CalculatorApp;


import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const productsData = [
  { id: '1', name: 'Product 1', price: 10 },
  { id: '2', name: 'Product 2', price: 20 },
  { id: '3', name: 'Product 3', price: 30 },
];

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const renderProduct = ({ item }) => (
    <View style={styles.productContainer}>
      <Text>{item.name}</Text>
      <Text>${item.price}</Text>
      <Button title="Add to Cart" onPress={() => addToCart(item)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Products</Text>
      <FlatList
        data={productsData}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.cartContainer}>
        <Text style={styles.cartHeading}>Shopping Cart</Text>
        {cart.map((item) => (
          <View key={item.id} style={styles.cartItem}>
            <Text>{item.name}</Text>
            <Text>${item.price}</Text>
          </View>
        ))}
        <Button title="Checkout" onPress={() => alert('Checkout button pressed')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  productContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
    marginBottom: 10,
  },
  cartContainer: {
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    marginTop: 20,
  },
  cartHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
});

export default App;
