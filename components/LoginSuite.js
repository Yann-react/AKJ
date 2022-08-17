import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,ScrollView
} from 'react-native';

import React, {useContext, useState} from 'react';
import axios from 'react-native-axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { storeToken } from '../service/apiService';
import { VerifyContext } from '../App';
const {height,width}= Dimensions.get('window')

const LoginSuite = props => {
  const [password, setPassword] = useState('');
  const [nom,setNom]=useState('')
  const [solde,setSolde]=useState('')
  // const [userToken,setUserToken]=useState(null)
  // const [userInfo,setUserInfo]=useState(null)

  const [homeShow,setHomeShow] = useContext(VerifyContext)

  const onLogin = () => {
    axios.post(`https://akj-k.herokuapp.com/api/Login`,
    {email:props.route.params.Email,
    password:password
  })
    .then(res => {
        // console.log(res);
        console.log("dataddsds", res.data)
           storeToken(res.data)
           setHomeShow(true)
          if(res.data.titre == 'client'){
          props.navigation.push("WalletClient")
         }else{
          props.navigation.push("MenuLivreur")
        }
        
    })
    .catch(error =>{
      Alert.alert(
        "Connexion echoué",
        "Email ou mots de passe incorrect",
          [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ]
        );                  
})
  };
  return (
    <ScrollView>
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
          Connexion
        </Text>
      </View>
      <View style={styles.boxLog}>
        <View>
          <Text
            style={{
              top:height*0.03,
              width: width*0.8,
              alignSelf: 'center',
              fontWeight: 'bold',
              fontSize: 20,
              color: '#4D3A34',
            }}>
            {props.route.params.Email}
          </Text>
          <TextInput
            style={{
              backgroundColor: '#8C7974',
              width:width*0.85,
              alignSelf: 'center',
              marginTop:height*0.05,
              borderRadius: 8,
              height: 60,
            }}
            placeholder="Mots de passe"
            onChangeText={password => setPassword(password)}
            value={password}
            secureTextEntry={true}
          />
        </View>
        <View style={{height: 70, width: '90%', alignSelf: 'center'}}>
          <TouchableOpacity
            style={{
              width: width*0.75,
              alignSelf: 'center',
              height: height*0.054,
              borderRadius: 8,
              justifyContent: 'center',
              backgroundColor: '#ffff',
              marginTop: height*0.05,
            }}
            onPress={() => onLogin()}>
            <Text
              style={{
                alignSelf: 'center',
                fontWeight: 'bold',
                color: '#4D3A34',
              }}>
              CONTINUER
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              alignSelf: 'center',
              top: height*0.1,
              color: '#4D3A34',
              fontWeight: 'bold',
            }}>
            Vous avez oublié votre mots de passe?
          </Text>
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

export default LoginSuite;

const styles = StyleSheet.create({
  image: {
    width: width,
    height:height*0.49,
  },
  boxLog: {
    flex: 1,
    // paddingTop: width*0.001,
    width: width*0.95,
    alignSelf: 'center',
    // bottom:height*0.04,
    borderRadius: 10,
    backgroundColor: '#ffff',
    opacity: 0.7,
    alignContent:"center",
    height:height*0.54

  },
});
