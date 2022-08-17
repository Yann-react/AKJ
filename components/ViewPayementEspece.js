import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,Alert
} from 'react-native';
import React, {useEffect, useState} from 'react';

import axios from 'react-native-axios';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

export default function ViewPayementEspece() {
  const [adresse, setAdresse] = useState(0);
  const [montant, setMontant] = useState(0);

  const sendPoint = () => {
    axios
      .post(`https://akj-k.herokuapp.com/api/sendPoint`, {
        adresse: adresse,
        solde:montant
      })
      .then(res => {
       
        console.log("nice");
        // console.log(res.data)
        Alert.alert(
          "Ajout de Point",
          "L'ajout a bien été effectué",
          [
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ]
        );
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
          flex: 0.4,
          height: 10,
          justifyContent: 'space-between',
          marginTop: 150,
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
        {/* <Text style={{position: 'absolute', left: 330, top: 10}}>Scan</Text> */}
        <TextInput
          placeholder="Montant payé"
          style={{
            borderWidth: 1,
            width: '90%',
            alignSelf: 'center',
            borderRadius: 13,
            borderColor: '#948A8A',
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
          onPress={sendPoint}>
            <FontAwesome5Icon  name='paper-plane' size={18} color="#4D3A34" />
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
