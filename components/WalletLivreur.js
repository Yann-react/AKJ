import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'react-native-axios';
import { getToken } from '../service/apiService';

const WalletLivreur = (props) => {
  const [nom,setNom]=useState('')
  const [solde,setSolde]=useState(0)
  const [email,setEmail] = useState('')

  
  const getInfo =()=>{
    axios
      .post(`https://back-akj-production.up.railway.app/api/getInfo`, {
        email: email

      })
      .then(res => {
        // console.log(res);
        console.log(res.data);
        setNom(res.data.nom)
      })
      .catch(error => {
        if (error.response) {
          console.log('rror sur rsp');
        } else if (error.request) {
          console.log('error sur requet');
        }
      });
  
  }
  useEffect(() => {
    getToken()
    .then((res)=>{
      setEmail(res.email)
      console.log("Data response wallet: ",res.titre)
    })
    .catch((e)=>{
      console.log("Error Data "+e)
    })
    getInfo()
  }, []);
  return (
    <View style={styles.wallet}>
      <View>
        <Text style={{color: '#ffff', fontWeight: 'bold', top: 50, left: 70}}>
        {nom}
        </Text>
      </View>
      <View style={{top: 100, flex: 1}}>
        <Text
          style={{
            color: '#ffff',
            alignSelf: 'center',
            marginTop: 170,
            fontSize: 80,
            fontWeight: 'bold',
          }}>
          K {solde}
        </Text>
        
      </View>
    </View>
  );
};

export default WalletLivreur;

const styles = StyleSheet.create({
  wallet: {
    flex: 1,
    backgroundColor: '#4D3A34',

  },
});
