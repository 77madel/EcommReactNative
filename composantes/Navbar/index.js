import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import Voiture from '../../assets/Rectangle13.png';
import icon1 from '../../assets/Rectangle 14.png';
import icon2 from '../../assets/Rectangle 15.png';
import icon3 from '../../assets/Rectangle 16.png';

const Navbar = () => {
  return (
    <View style={styles.navBar}>
      <View style={styles.column}>
        <TouchableOpacity style={styles.navItemContainer}>
          <Image style={styles.icon} source={Voiture} />
          <Text style={styles.navItem}>LIVRAISON ET EXPEDITION</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItemContainer}>
          <Image style={styles.icon} source={icon1} />
          <Text style={styles.navItem}>LIVRAISON ET EXPEDITION</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItemContainer}>
          <Image style={styles.icon} source={icon2} />
          <Text style={styles.navItem}>LIVRAISON ET EXPEDITION</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.navItemContainer}>
          <Image style={styles.icon} source={icon3} />
          <Text style={styles.navItem}>LIVRAISON ET EXPEDITION</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#00bcd4',
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
  },
  column: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navItemContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  navItem: {
    color: '#fff',
    fontSize: 11,
    textAlign: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export default Navbar;
