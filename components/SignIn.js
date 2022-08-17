import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ScrollView
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'react-native-axios';

const {height,width}=Dimensions.get('window')

const Signin = props => {
  const [nom, setNom] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [solde, setSolde] = useState(200);
  const [titre, setTitre] = useState('client');
  const [adresse, setAdresse] = useState(0);

  const random=()=>{
      const  nbre = parseInt(Math.random()*1000000)
      if (nbre.lenght<6){
        nbre = parseInt(Math.random()*1000000)
      }
      setAdresse(nbre)
  }

  const onSignUp = () => {
axios.post(`https://akj-k.herokuapp.com/api/signIn`,
    {email:email,
    nom:nom,
    solde:solde,
    titre:titre,
    password:password,
    adresse:adresse
  })
    .then(res => {
        // console.log(res);
        // console.log(res.data)
        console.log("ok")
        props.navigation.push("WalletClient",{
            Email: email
        })

    })
    .catch(error =>{
      if(error.response){
          console.log("rror sur rsp")
      }else if (error.request){
      console.log("error sur requet")
      }                  
})
  };

  useEffect(()=>{
    random()
  },[])

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
          Incription
        </Text>
      </View>
      <View style={styles.boxLog}>
        <View style={{bottom:width*0.1}}>
          <TextInput
            style={{
              backgroundColor: '#8C7974',
              borderRadius: 8,
              width: width*0.86,

              alignSelf: 'center',
              // bottom: 70,
              // marginTop: height*,
            }}
            placeholder="Nom"
            onChangeText={nom => setNom(nom)}
            value={nom}
          />
          <TextInput
            style={{
              backgroundColor: '#8C7974',
              borderRadius: 8,
              width: width*0.86,

              alignSelf: 'center',
              marginTop: height*0.04,

            }}
            placeholder="Email"
            onChangeText={email => setEmail(email)}
            value={email}
          />
          <TextInput
            style={{
              backgroundColor: '#8C7974',
              borderRadius: 8,
              width: width*0.86,
              alignSelf: 'center',
              // bottom: 70,
              marginTop: height*0.04,

            }}
            placeholder="Mots de passe"
            onChangeText={password => setPassword(password)}
            value={password}
            secureTextEntry={true}

          />
        </View>
        <View style={{height: height*0.7, width: width*0.8, alignSelf: 'center'}}>
          <Text style={{marginBottom: height*0.01, color: '#4D3A34', fontWeight: 'bold'}}>
            * J'ai lu et j'accepte les conditions d'utilisation et la politique
            de confidentialité de akj.
          </Text>
          <TouchableOpacity
            style={{
              width: width*0.8,
              alignSelf: 'center',
              height: height*0.054,
              borderRadius: 8,
              justifyContent: 'center',
              backgroundColor: '#ffff',
              marginTop: height*0.01,
            }}
            onPress={onSignUp}>
            <Text
              style={{alignSelf: 'center', fontWeight: 'bold', color: 'black'}}>
              J'accepte et continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

export default Signin;

const styles = StyleSheet.create({
  image: {
    width: width,
    height:height*0.49,
  },
  boxLog: {
    flex: 1,
    paddingTop: width*0.2,
    width: width*0.95,
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#ffff',
    opacity: 0.7,
    alignContent:"center",
    height:height*0.57
  },
});
