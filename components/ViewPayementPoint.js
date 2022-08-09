import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,Alert
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'react-native-axios';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
export default function ViewPayementPoint(props) {
  const [adresse, setAdresse] = useState(0);
  const [montant, setMontant] = useState(0);
  
  const receivePoint = () => {
    axios.post(`http://192.168.1.170:3001/api/getPoint`,{
        adresse: adresse,
        solde:montant
      })
      .then(res => {
        
        console.log("nice");
        Alert.alert(
          "Retrait de Point",
          "Le retrait a bien été effectué",
          [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ]
        );
        // console.log(res.data)
      })
      .catch(error => {
        if (error.response) {
          console.log('rror sur rsp');
        } else if (error.request) {
          console.log('error sur requet');
        }
      });
  };
  return (
    <View style={styles.wallet}>
      <View
        style={{
          flex: 0.5,
          // height: 1,
          justifyContent: 'space-between',
          marginTop: 150,
          paddingTop: 50,
        }}>
        
        <TextInput
          placeholder="Adresse du destinataire"
          style={{
            borderWidth: 1,
            width: '90%',
            alignSelf: 'center',
            borderRadius: 13,
            borderColor: '#948A8A',
            color:'#ffff',
            fontWeight:'bold'
          }}
          onChangeText={adresse => setAdresse(adresse)}
          placeholderTextColor='#ffff'
        />
        <TextInput
          placeholder="Point a retirer"
          style={{
            borderWidth: 1,
            width: '90%',
            alignSelf: 'center',
            borderRadius: 13,
            borderColor: '#948A8A',
            alignItems:'center',
            display:'flex',
            flexDirection:'row',
            color:'#ffff',
            fontWeight:'bold'
          }}
          onChangeText={montant => setMontant(montant)}
          placeholderTextColor='#ffff'

        />
        <TouchableOpacity
          style={{
            borderWidth: 1,
            width: '30%',
            alignSelf: 'center',
            height: 38,
            justifyContent: 'center',
            borderRadius: 17,
            backgroundColor: '#ffff',
            alignItems:'center',
            display:'flex',
            flexDirection:'row'
          }}
          onPress={receivePoint}>
          <FontAwesome5Icon name="paper-plane" size={18} color="#4D3A34" />

          <Text
            style={{textAlign: 'center', fontWeight: 'bold', color: '#4D3A34',marginLeft:10}}>
            Envoyer
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wallet: {
    flex: 1,
    backgroundColor: '#4D3A34',
  },
});
