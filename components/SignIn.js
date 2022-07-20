import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import firestore from '@react-native-firebase/firestore';
const Signin = props => {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [solde, setSolde] = useState(200);
  const [titre, setTitre] = useState('client');

  const onSignUp = () => {
    firestore()
    .collection('Users')
    .add({
        nom:nom,
        email:email,
        password:password,
        solde:solde,
        titre:titre
    })
    .then(() => {
      console.log('User added!');
      props.navigation.push('WalletClient')
    }).catch((error)=>{
      console.log(error)
    })
  };

  return (
    <View style={{flex: 1, backgroundColor: '#4D3A34'}}>
      <View style={{flex: 1}}>
        <Image source={require('../assets/akj.jpg')} style={styles.image} />
        <Text
          style={{
            color: '#ffff',
            fontSize: 35,
            marginTop: -130,
            fontWeight: 'bold',
            left: 10,
          }}>
          Incription
        </Text>
      </View>
      <View style={styles.boxLog}>
        <View>
          <TextInput
            style={{
              backgroundColor: '#8C7974',
              borderRadius: 8,
              width: '90%',
              alignSelf: 'center',
              bottom: 70,
              marginBottom: 30,
            }}
            placeholder="Nom"
            onChangeText={nom => setNom(nom)}
            value={nom}
          />
          <TextInput
            style={{
              backgroundColor: '#8C7974',
              borderRadius: 8,
              width: '90%',
              alignSelf: 'center',
              bottom: 70,
            }}
            placeholder="Email"
            onChangeText={email => setEmail(email)}
            value={email}
          />
          <TextInput
            style={{
              backgroundColor: '#8C7974',
              borderRadius: 8,
              width: '90%',
              alignSelf: 'center',
              bottom: 70,
              marginTop: 30,
            }}
            placeholder="Mots de passe"
            onChangeText={password => setPassword(password)}
            value={password}
          />
        </View>
        <View style={{height: 70, width: '90%', alignSelf: 'center'}}>
          <Text style={{marginTop: -30, color: '#4D3A34', fontWeight: 'bold'}}>
            * J'ai lu et j'accepte les conditions d'utilisation et la politique
            de confidentialité de akj.
          </Text>
          <TouchableOpacity
            style={{
              width: '90%',
              alignSelf: 'center',
              height: 44,
              borderRadius: 8,
              justifyContent: 'center',
              backgroundColor: '#ffff',
              marginTop: 35,
            }}
            onPress={() => onSignUp()}>
            <Text
              style={{alignSelf: 'center', fontWeight: 'bold', color: 'black'}}>
              J'accepte et continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 400,
    top: 10,
  },
  boxLog: {
    flex: 1,
    paddingTop: 120,
    width: '95%',
    alignSelf: 'center',
    bottom: 20,
    borderRadius: 10,
    backgroundColor: '#ffff',
    opacity: 0.8,
  },
});
