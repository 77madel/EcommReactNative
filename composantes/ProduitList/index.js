import {View, Text, StyleSheet, Image, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native'
import React, {useEffect, useState} from 'react'
import ProduitService from '../../fakeData/fakeProduit'
import images from '../../assets/desktop.png'
import ProduitDetail from "../../ecrans/ProduitDetail";
import axios from "axios";

const API_URL = "http://127.0.0.1:8000/api/produits";

const ProduitList = ({navigation}) => {

    const [produits, setProduits] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduits = async () => {
            try {
                const response = await axios.get(API_URL);
                setProduits(response.data);
                console.log('produits', response.data)
            } catch (error) {
                setError('Erreur lors de la récupération des produits');
            } finally {
                setLoading(false);
            }
        };

        fetchProduits();
    }, []);

    const handleProductPress = (product) => {
        setSelectedProduct(product);
    };

    const handleBackPress = () => {
        setSelectedProduct(null);
    };

    if (selectedProduct) {
        return <ProduitDetail product={selectedProduct} onBackPress={handleBackPress} />;
    }

    if (loading) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator size="large" color="#0000ff" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>{error}</Text>
            </View>
        );
    }


    return (
    <View>
      <View style={styles.productList}>
        <FlatList
          data={produits}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.productItem} onPress={() => handleProductPress(item)}>
              <Image source={images} style={styles.productImage} />
              <Text style={styles.productBrand}>{item.stock}</Text>
              {/* <Text style={styles.productName}>{item.description}</Text> */}
              <Text style={styles.productPrice}>{item.prix}</Text>
            </TouchableOpacity>
          )}
          numColumns={2}
          key={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    productList: {
        padding: 10,
    },
    productItem: {
        flex: 1,
        margin: 5,
        backgroundColor: '#f9f9f9',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
    },
    productImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    productBrand: {
        fontSize: 16,
        color: '#000',
        marginTop: 5,
    },
      productName: {
        fontSize: 14,
        color: '#000',
        textAlign: 'center',
        marginTop: 5,
    },
      productPrice: {
        fontSize: 14,
        color: '#ff0000',
        marginTop: 5,
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        color: 'red',
        fontSize: 18,
        marginTop: 50,
    },
})

export default ProduitList
