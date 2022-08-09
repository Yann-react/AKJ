import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,ScrollView
} from 'react-native';

import React, {useState} from 'react';
import axios from 'react-native-axios'

const {height,width}= Dimensions.get('window')

const LoginSuite = props => {
  const [password, setPassword] = useState('');
  const [nom,setNom]=useState('')
  const [solde,setSolde]=useState('')
  const onLogin = () => {
    axios.post(`http://192.168.1.170:3001/api/Login`,
    {email:props.route.params.Email,
    password:password
  })
    .then(res => {
        // console.log(res);
        // console.log(res.data)
      // console.log(res.data.succes)
      // console.log(res.data.titre)
      if(res.data.titre == 'client'){
        props.navigation.push("WalletClient",{
          Email: props.route.params.Email
        })
      }else{
        props.navigation.push("MenuLivreur",{
          Email: props.route.params.Email
        })
      }
    })
    .catch(error =>{
      if(error.response){
          console.log("rror sur rsp")
      }else if (error.request){
      console.log("error sur requet")
      }                  
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
