import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native'
import React, {useEffect, useState} from 'react'
import images from '../../assets/desktop.png'
import Navbar from '../../composantes/Navbar';
import Header from '../../composantes/Header';

const ProduitDetail = ({product, onBackPress}) => {
    //const {item} = route.params
    const [visibleSection, setVisibleSection] = useState('description');
    const [Qty, setQty] = useState(1)

    const increment = () => {
        setQty(prev=>prev+1)
    }

    const decrement = () => {
        if(Qty>1){
            setQty(prev=>prev-1)
        }
    }

  return (
    <>

      {/*/!* header side et search panier *!/*/}
      {/*  <Header navigation={navigation}/>*/}
      {/*/!*Fin header side et search panier *!/*/}


      {/*/!* NavBar *!/*/}
      {/*<Navbar />*/}
      {/*/!* Fin NavBar *!/*/}

    <View style={styles.container}>

     <View style={styles.productItem}>
       <Image source={images} style={styles.productImage} />
       <View style={styles.productInfo}>
         <Text style={styles.productBrand}>{product.nom_produit}</Text>
         <Text style={styles.productPrice}>{product.prix}</Text>
         <View style={styles.cartActions}>
           <Button title="-" onPress={decrement} />
           <Text style={styles.quantity}>{Qty}</Text>
           <Button title="+" onPress={increment}  />
           <TouchableOpacity style={styles.addButton}>
             <Text style={styles.addButtonText}>Ajouter au panier</Text>
           </TouchableOpacity>
         </View>
         <View style={styles.productDescription}>
           <Text>Description</Text>
           <Text>{product.description}</Text>
         </View>
       </View>
     </View>

     <View style={[styles.info]}>
        <TouchableOpacity onPress={() => setVisibleSection(visibleSection === 'description' ? null : 'description')}>
          <Text style={styles.tabText}>Description</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setVisibleSection(visibleSection === 'additionalInfo' ? null : 'additionalInfo')}>
          <Text style={styles.infosupp}>Information Supplementaire</Text>
        </TouchableOpacity>
      </View>

      {visibleSection === 'description' && (
        <View style={styles.card}>
          <Text style={styles.cardText}>{product.description}</Text>
        </View>
      )}

      {visibleSection === 'additionalInfo' && (
        <View style={styles.card}>
          <Text style={styles.cardText}>Informations supplémentaires sur le produit...</Text>
        </View>
      )}
   </View>
    </>


  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#f2f2f2',
    },
    header: {
      marginBottom: 16,
    },
    headerText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    tags: {
      flexDirection: 'row',
      marginTop: 8,
    },
    tag: {
      backgroundColor: '#e0e0e0',
      padding: 8,
      marginRight: 8,
      borderRadius: 4,
    },
    productItem: {
      backgroundColor: '#fff',
      padding: 16,
      borderRadius: 8,
      flexDirection: 'row',
      alignItems: 'center',
    },
    productImage: {
      width: 100,
      height: 100,
      marginRight: 16,
    },
    productInfo: {
      flex: 1,
    },
    productBrand: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    productPrice: {
      fontSize: 18,
      color: '#ff0000',
      marginVertical: 8,
    },
    cartActions: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 8,
    },
    quantity: {
      marginHorizontal: 8,
      fontSize: 16,
    },
    addButton: {
      backgroundColor: '#4CAF50',
      padding: 10,
      marginLeft: 16,
      borderRadius: 4,
    },
    addButtonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    productDescription: {
      marginTop: 16,
    },
      info: {
        flexDirection: 'row',
        marginTop: 16,

      },
      tabText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
      },
      infosupp: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 8,
        color: '#000',
      },
      card: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        marginTop: 16,
        elevation: 3, // Pour les ombres sur Android
        shadowColor: '#000', // Pour les ombres sur iOS
        shadowOffset: { width: 0, height: 2 }, // Pour les ombres sur iOS
        shadowOpacity: 0.8, // Pour les ombres sur iOS
        shadowRadius: 2, // Pour les ombres sur iOS
      },
      cardText: {
        fontSize: 14,
        color: '#333',
      },
  });

export default ProduitDetail
