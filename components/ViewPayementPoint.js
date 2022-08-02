import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'react-native-axios';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
export default function ViewPayementPoint(props) {
  const [adresse, setAdresse] = useState(0);
  const [montant, setMontant] = useState(0);
  const [newSoldeD,setNewSoldeD] = useState(0)
  const [newSolde,setNewSolde] = useState(0)

  const [code, setCode] = useState(0);
  const [id, setId] = useState('');
  const [idR, setIdR] = useState('');

  const receivePoint = () => {
    // console.log(montant);
    axios
      .post(`http://10.0.2.2:3001/api/getId`, {
        adresse: adresse,
      })
      .then(res => {
        setId(res.data.id);
        setNewSoldeD(res.data.solde)
        console.log(res.data.solde);
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
        solde: (newSoldeD - montant),
      })
      .then(res => {
        // console.log(res)
        console.log('ok');
      })
      .catch(error => {
        if (error.response) {
          console.log(error);
        } else if (error.request) {
          console.log('error sur requet');
        }
      });
      // axios
      // .put(`http://10.0.2.2:3001/api/sendPoint/${idR}`, {
      //   solde: (newSolde + montant),
      // })
      // .then(res => {
      //   // console.log(res)
      //   console.log('ok');
      // })
      // .catch(error => {
      //   if (error.response) {
      //     console.log('rror sur rsp');
      //   } else if (error.request) {
      //     console.log('error sur requet');
      //   }
      // });
  };
  useEffect(() => {
    axios
      .post(`http://10.0.2.2:3001/api/getAdresse`, {
        email: props.route.params.Email,
      })
      .then(res => {
        // console.log(res);
        // console.log(res.data);
        setCode(res.data.adresse);
      })
      .catch(error => {
        if (error.response) {
          console.log('rror sur rsp');
        } else if (error.request) {
          console.log('error sur requet');
        }
      });
      console.log(code)
      axios
      .post(`http://10.0.2.2:3001/api/getId`, {
        adresse: code,
      })
      .then(res => {
        setIdR(res.data.id);
        setNewSolde(res.data.solde)
        console.log(res.data.id);
        // console.log(res.data)
      })
      .catch(error => {
        if (error.response) {
          console.log('rror sur rsp');
        } else if (error.request) {
          console.log('error sur requet');
        }
      });
  }, []);
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
