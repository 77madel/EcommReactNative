import React from 'react';
import { View, Text, ScrollView, FlatList, StyleSheet, TouchableOpacity, Image, Pressable } from 'react-native';
import ProduitList from '../../composantes/ProduitList';
import Navbar from '../../composantes/Navbar';
import Ionicons from '@expo/vector-icons/Ionicons';
import Logo from '../../assets/Rectangle 4.png'
import Header from '../../composantes/Header';
const Home = ({item, navigation}) => {
  return (
    <ScrollView style={styles.container}>
      {/* header side et search panier */}
        <Header navigation={navigation}/>
      {/*Fin header side et search panier */}

      {/* NavBar */}
        <Navbar />
      {/* Fin NavBar */}

      <View style={styles.header}>
        <Text style={styles.headerText}>Nouveaux Produits</Text>
        <View style={styles.tabContainer}>
          <TouchableOpacity style={[styles.tab, styles.activeTab]}>
            <Text style={styles.tabText}>PC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Apple</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Accessoires</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Ecran</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Laptop</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Liste des produits */}
        <ProduitList item={item} navigation={navigation}/>
      {/* Fin Liste des produits */}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 10,
  },
  Images1:{
    marginLeft: 50,
  },
  header1: {
    backgroundColor: '#1F1F29',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  tab: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    marginHorizontal: 5,
    borderRadius: 5,
  },
  activeTab: {
    backgroundColor: '#4CAF50',
  },
  tabText: {
    color: '#000',
  },

  listContainer: {
    justifyContent: 'center',
  },

});

export default Home;
