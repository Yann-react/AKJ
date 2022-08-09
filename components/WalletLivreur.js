import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'react-native-axios';

const WalletLivreur = (props) => {
  const [nom,setNom]=useState('')
  const [solde,setSolde]=useState(0)
  
  useEffect(() => {
    axios
      .post(`http://192.168.1.170:3001/api/getNom`, {
        email: props.route.params.Email,
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
      axios
      .post(`http://192.168.1.170:3001/api/getSolde`, {
        email: props.route.params.Email,
      })
      .then(res => {
        // console.log(res);
        console.log(res.data);
        setSolde(res.data.solde)
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
