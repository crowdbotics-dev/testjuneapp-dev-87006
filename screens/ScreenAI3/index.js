import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Screen = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Add Some Ice-Cream</Text>
      </View>
      <View style={styles.content}>
        <Image source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} style={styles.image} />
        <Text style={styles.title}>Choose Your Flavor</Text>
        <View style={styles.flavors}>
          <View style={styles.flavor}>
            <Image source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} style={styles.flavorImage} />
            <Text style={styles.flavorText}>Vanilla</Text>
          </View>
          <View style={styles.flavor}>
            <Image source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} style={styles.flavorImage} />
            <Text style={styles.flavorText}>Chocolate</Text>
          </View>
          <View style={styles.flavor}>
            <Image source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} style={styles.flavorImage} />
            <Text style={styles.flavorText}>Strawberry</Text>
          </View>
        </View>
        <Text style={styles.title}>Choose Your Toppings</Text>
        <View style={styles.toppings}>
          <View style={styles.topping}>
            <Image source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} style={styles.toppingImage} />
            <Text style={styles.toppingText}>Sprinkles</Text>
          </View>
          <View style={styles.topping}>
            <Image source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} style={styles.toppingImage} />
            <Text style={styles.toppingText}>Chocolate Chips</Text>
          </View>
          <View style={styles.topping}>
            <Image source={{
            uri: 'https://tinyurl.com/42evm3m3'
          }} style={styles.toppingImage} />
            <Text style={styles.toppingText}>Caramel Sauce</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Add to Cart</Text>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    height: 80,
    backgroundColor: '#FFC0CB',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff'
  },
  content: {
    flex: 1,
    padding: 20
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  flavors: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  flavor: {
    alignItems: 'center'
  },
  flavorImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10
  },
  flavorText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  toppings: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  topping: {
    alignItems: 'center'
  },
  toppingImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 10
  },
  toppingText: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  footer: {
    height: 60,
    backgroundColor: '#FFC0CB',
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  }
});
export default Screen;