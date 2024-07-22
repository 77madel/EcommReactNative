import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native'
import Home from '../ecrans/Home'
import { createDrawerNavigator } from '@react-navigation/drawer';
import ProduitDetail from '../ecrans/ProduitDetail';
import Inscription from '../ecrans/Inscription';
import Connexion from '../ecrans/Connexion'
import AddProduit from '../ecrans/Admin/Produit/addProduit'


const LeftDrawer = createDrawerNavigator();
const RightDrawer = createDrawerNavigator();
const LeftScreenDrawer = () => {
    return(
        <LeftDrawer.Navigator screenOptions={{ drawerPosition: 'left',headerShown: false }} id="LeftDrawer">
            <LeftDrawer.Screen name="Home" component={Home} />
            <LeftDrawer.Screen name="AddProduit" component={AddProduit} />
           {/*<LeftDrawer.Screen name="Connexion" component={Connexion} />*/}

        </LeftDrawer.Navigator>
    )
}

const RightScreenDrawer = () => {
    return(
        //drawerContent={(props) => <CartDisplay {...props} />}
        <RightDrawer.Navigator
            screenOptions={{ drawerPosition: 'right',headerShown: false }} id="RightDrawer"
            drawerContent={(props) => <CartDisplay {...props}/>}
        >
            <RightDrawer.Screen name="Acceuil" component={LeftScreenDrawer} />
        </RightDrawer.Navigator>
    )
}

const CartDisplay = () => {
    return (
        <View style={{flex: 1, marginTop: 100}}>
            <Text>Cart</Text>
            <Text>Cart</Text>
            <Text>Cart</Text>
            <Text>Cart</Text>
            <Text>Cart</Text>
        </View>
    )
}


const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
const Routes = () => {

  return (
    <NavigationContainer initialRouteName="Home" >
        <RightScreenDrawer />
      {/*<Drawer.Navigator  screenOptions={{headerShown:false}}>*/}
      {/*  /!*<Stack.Screen name="HomeStack"  component={HomeStack} />*!/*/}
      {/*  <Drawer.Screen name="Home" component={Home} />*/}
      {/*  <Stack.Screen name="Inscription" component={Inscription} />*/}
      {/*  <Stack.Screen name="ProduitDetail" component={ProduitDetail} />*/}
      {/*  <Stack.Screen name="Connexion" component={Connexion} />*/}
      {/*</Drawer.Navigator>*/}


   </NavigationContainer>
  )
}


export default Routes
