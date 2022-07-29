import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'react-native-axios';
export default function ViewPayementPoint(props) {
  const [adresse, setAdresse] = useState(0);
  const [montant, setMontant] = useState(0);
  const [code,setCode]= useState(0)
  const [id, setId] = useState('');

  const receivePoint = () => {
    console.log(montant);
    axios
      .post(`http://10.0.2.2:3001/api/getId`, {
        adresse: adresse,
      })
      .then(res => {
        setId(res.data);
        console.log(id);
        // console.log(res.data)
      })
      .catch(error => {
        if (error.response) {
          console.log('rror sur rsp');
        } else if (error.request) {
          console.log('error sur requet');
        }
      });
    axios
      .put(`http://10.0.2.2:3001/api/sendPoint/${id}`, {
        solde:solde + montant,
      })
      .then(res => {
        // console.log(res)
        console.log('ok');
      })
      .catch(error => {
        if (error.response) {
          console.log('rror sur rsp');
        } else if (error.request) {
          console.log('error sur requet');
        }
      });
  };
  useEffect(()=>{
    axios
    .post(`http://10.0.2.2:3001/api/getAdresse`, {
      email: props.route.params.Email,
    })
    .then(res => {
      // console.log(res);
      console.log(res.data);
      setCode(res.data)
    })
    .catch(error => {
      if (error.response) {
        console.log('rror sur rsp');
      } else if (error.request) {
        console.log('error sur requet');
      }
    });
  },[])
  return (
    <View style={styles.wallet}>
      <View
        style={{
          flex: 0.5,
          // height: 1,
          justifyContent: 'space-between',
          marginTop: 150,
          paddingTop:50
        }}>
          <Text style={{alignSelf:"center",fontSize:20,fontWeight:"bold",color:"#ffff"}}>Votre Adresse : {code} </Text>
        <TextInput
          placeholder="Adresse du destinataire"
          style={{
            borderWidth: 1,
            width: '90%',
            alignSelf: 'center',
            borderRadius: 13,
            borderColor: '#948A8A',
          }}
          onChangeText={adresse => setAdresse(adresse)}
        />
        <TextInput
          placeholder="Point a retirer"
          style={{
            borderWidth: 1,
            width: '90%',
            alignSelf: 'center',
            borderRadius: 13,
            borderColor: '#948A8A',
          }}
          onChangeText={montant => setMontant(montant)}
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
          }}
          onPress={receivePoint}>
          <Text
            style={{textAlign: 'center', fontWeight: 'bold', color: '#4D3A34'}}>
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
