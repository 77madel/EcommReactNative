import { View, Text, StyleSheet, Image, ActivityIndicator, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import ProduitDetail from "../../ecrans/ProduitDetail";
import axios from "axios";

const ProduitList = ({ navigation }) => {
    const [produits, setProduits] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const API_URL = "http://127.0.0.1:8001/api/produits";

        const fetchProduits = async () => {
            try {
                const response = await axios.get(API_URL);
                console.log('Données récupérées:', response.data);
                if (response.data.status && Array.isArray(response.data.produits)) {
                    setProduits(response.data.produits);
                    setLoading(false);
                } else {
                    setError('Format des données invalide');
                    setLoading(false);
                }
            } catch (error) {
                setError('Erreur lors de la récupération des produits');
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

    if (!Array.isArray(produits) || produits.length === 0) {
        return (
            <View style={styles.errorContainer}>
                <Text style={styles.errorText}>Les produits ne sont pas disponibles.</Text>
            </View>
        );
    }

    return (
        <View style={styles.productList}>
            {produits.map(item => (
                <Pressable key={item.id} style={styles.productItem} onPress={() => handleProductPress(item)}>
                    <Image source={{ uri: item.image_url || 'https://via.placeholder.com/100' }} style={styles.productImage} />
                    <Text style={styles.productBrand}>{item.nom}</Text>
                    <Text style={styles.productBrand}>{item.stock}</Text>
                    <Text style={styles.productPrice}>{item.prixFormatted}</Text>
                </Pressable>
            ))}
        </View>
    );
};

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
});

export default ProduitList;
