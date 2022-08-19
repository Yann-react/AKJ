import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Dimensions,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useContext, useState} from 'react';
import axios from 'react-native-axios'

const {height, width} = Dimensions.get('window');

export default function ForgetPassword(props) {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');


    const onChangePassword=()=>{
        axios.post(`https://akj-k.herokuapp.com/api/forgetPassword`,
    {email:email,
    password:password
  })
    .then(res => {
        // console.log(res);
        console.log("dataddsds", res.data)
        props.navigation.push("Login")

         Alert.alert(
            "Changement Mots De Passe",
            "Changement du mots de passe est un succes"
         )
        
    })
    .catch(error =>{
      Alert.alert(
        "Changement Mots De Passe",
        "l'Email n'existe pas",
          [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ]
        );                  
}) 
    }

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
            Changé Mot De Passe
          </Text>
        </View>
        <View style={styles.boxLog}>
          <View>
            
            <TextInput
              style={{
                backgroundColor: '#8C7974',
                width: width * 0.85,
                alignSelf: 'center',
                marginTop: height * 0.05,
                borderRadius: 8,
                height: 60,
              }}
              placeholder="Email"
              onChangeText={email => setEmail(email)}
              value={email}
            />
            <TextInput
              style={{
                backgroundColor: '#8C7974',
                width: width * 0.85,
                alignSelf: 'center',
                marginTop: height * 0.05,
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
                width: width * 0.75,
                alignSelf: 'center',
                height: height * 0.054,
                borderRadius: 8,
                justifyContent: 'center',
                backgroundColor: '#ffff',
                marginTop: height * 0.05,
              }}
              onPress={() => onChangePassword()}>
              <Text
                style={{
                  alignSelf: 'center',
                  fontWeight: 'bold',
                  color: '#4D3A34',
                }}>
                CONTINUER
              </Text>
            </TouchableOpacity>
            
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: width,
    height: height * 0.59,
  },
  boxLog: {
    flex: 1,
    width: width * 0.95,
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: '#ffff',
    opacity: 0.7,
    alignContent: 'center',
    height: height * 0.44,
  },
});
