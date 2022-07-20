import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React ,{useState} from 'react';
import firestore from '@react-native-firebase/firestore';

const Login = props => {


  const [email,setEmail]=useState('')
  const [nom,setNom]=useState('')


  const image = require('../assets/akj.jpg');

  const Togo = () => {
    firestore()
    .collection('Users')
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(documentSnapshot => {
        if (documentSnapshot.data().email == email){
           setNom(documentSnapshot.data().nom)
           console.log(nom)
            props.navigation.push('LoginSuite', {
              Email:email,
              Nom:nom
            });
        }
          
      });
    });
  };

  return (
    <View style={{flex: 1, backgroundColor: '#4D3A34'}}>
      {/* <ImageBackground source={image} resizeMode="cover" style={styles.image}> */}
      <View style={{flex: 1}}>
        <Image source={require('../assets/akj.jpg')} style={styles.image} />
        <Text style={styles.titleText}>Bienvenue</Text>
      </View>
      <View style={styles.boxLog}>
        <TextInput style={styles.inputEmail} placeholder="Email" onChangeText={email=>setEmail(email)}
            value={email} />
        <TouchableOpacity style={styles.buttomCon} onPress={() => Togo()}>
          <Text
            style={{alignSelf: 'center', fontWeight: 'bold', color: '#4D3A34'}}>
            CONTINUER
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: 10,
            color: '#45342F',
          }}>
          OU
        </Text>
        <TouchableOpacity
          style={{
            width: '90%',
            alignSelf: 'center',
            height: 44,
            marginTop: 18,
            borderRadius: 8,
            justifyContent: 'center',
            backgroundColor: '#ffff',
          }}>
          <Text
            style={{alignSelf: 'center', fontWeight: 'bold', color: '#4D3A34'}}>
            Continuez sur Google
          </Text>
        </TouchableOpacity>
        <View
          style={{
            marginTop: 60,
            height: 70,
            justifyContent: 'space-between',
            width: '90%',
            alignSelf: 'center',
          }}>
          <Text
            style={{alignSelf: 'center', color: '#4D3A34', fontWeight: 'bold'}}
            onPress={() => props.navigation.push('SignIn')}>
            Vous n'avez pas de compte ? Incription
          </Text>
          <Text
            style={{alignSelf: 'center', color: '#4D3A34', fontWeight: 'bold'}}>
            Vous avez oublié votre mots de passe?
          </Text>
        </View>
      </View>
      {/* </ImageBackground> */}
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 400,
    top: 10,
  },
  boxLog: {
    flex: 1,
    paddingTop: 110,
    width: '95%',
    alignSelf: 'center',
    bottom: 20,
    borderRadius: 10,
    backgroundColor: '#ffff',
    opacity: 0.7,
  },
  titleText: {
    color: '#ffff',
    fontSize: 35,
    marginTop: -130,
    fontWeight: 'bold',
    left: 10,
  },
  inputEmail: {
    backgroundColor: '#8C7974',
    width: '90%',
    alignSelf: 'center',
    bottom: 70,
    borderRadius: 8,
  },
  buttomCon: {
    width: '90%',
    alignSelf: 'center',
    height: 44,
    marginTop: -40,
    borderRadius: 8,
    justifyContent: 'center',
    backgroundColor: '#ffff',
    marginBottom: 15,
  },
});
