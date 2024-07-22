import { View, Text, StyleSheet,TouchableOpacity, Button } from 'react-native'
import React, {useState} from 'react'
import { TextInput } from 'react-native-gesture-handler';
import Checkbox from 'expo-checkbox';
import Header from "../../composantes/Header";

const Connexion = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <View style={styles.tabContainer}>
            <Button
            style={styles.tabInactive}
            title='CONNEXION'
            />
            <Button style={styles.tabInactive} title="S'ENREGISTRER" />
            </View>
            <Text style={styles.subtitle}>Saisissez votre nom d'utilisateur et votre mot de passe
            pour vous connecter. </Text>
            <TextInput
              style={styles.input}
              placeholder="Nom d'utilisateur :"
              value={username}
              onChangeText={setUsername}
            />
            <TextInput
              style={styles.input}
              placeholder="Mot de passe :"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <View style={styles.checkboxContainer}>
              <Checkbox
              style={styles.checkbox}
              value={rememberMe}
              onValueChange={setRememberMe}/>
              <Text style={styles.checkboxLabel}>Se Souvenir de moi</Text>
            </View>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>CONNEXION</Text>
            </TouchableOpacity>
          </View>
        </View>
    );
}

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d3d1f8', // Light purple background color
      },
      formContainer: {
        width: '80%',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 1,
      },
      tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
      },
      tabInactive: {
        fontSize: 18,
        color: '#aaa',
      },
      tabActive: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
      },
      subtitle: {
        fontSize: 14,
        color: '#555',
        marginBottom: 20,
        textAlign: 'center',
      },
      input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 15,
        paddingLeft: 10,
      },
      checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
      },
      checkboxLabel: {
        marginLeft: 10,
      },
      button: {
        backgroundColor: '#4CAF50',
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
      },
    });

export default Connexion
