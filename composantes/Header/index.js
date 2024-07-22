import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import Logo from '../../assets/Rectangle 4.png'
import React from 'react'



const Header = ({navigation}) => {


  return (
    <View style={styles.header1}>
        <TouchableOpacity onPress={() => {navigation.getParent('LeftDrawer').openDrawer()}}>
          <Ionicons style={{marginLeft:10}} name='list-outline' size={32} color='white' />
        </TouchableOpacity>
        <Image source={Logo} style={styles.Images1}/>
        <TouchableOpacity>
          <Ionicons name='search' size={32} color='white' />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {navigation.getParent('RightDrawer').openDrawer()}}>
          <Ionicons name='cart' size={32} color='white' />
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  header1: {
    backgroundColor: '#1F1F29',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  Images1:{
    marginLeft: 50,
    marginTop: 25,
  },

})

export default Header
