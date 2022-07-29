import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TabRouter} from '@react-navigation/native';
import axios from 'react-native-axios';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const WalletClient = props => {
  const [nom,setNom]=useState('')
  const [solde,setSolde]=useState(0)

  // useEffect(() => {
  //   axios
  //     .post(`http://10.0.2.2:3001/api/getNom`, {
  //       email: props.route.params.Email,
  //     })
  //     .then(res => {
  //       // console.log(res);
  //       console.log(res.data);
  //       setNom(res.data)
  //     })
  //     .catch(error => {
  //       if (error.response) {
  //         console.log('rror sur rsp');
  //       } else if (error.request) {
  //         console.log('error sur requet');
  //       }
  //     });
  //     axios
  //     .post(`http://10.0.2.2:3001/api/getSolde`, {
  //       email: props.route.params.Email,
  //     })
  //     .then(res => {
  //       // console.log(res);
  //       console.log(res.data);
  //       setSolde(res.data)
  //     })
  //     .catch(error => {
  //       if (error.response) {
  //         console.log('rror sur rsp');
  //       } else if (error.request) {
  //         console.log('error sur requet');
  //       }
  //     });
  // }, []);
  // console.log(props.route.params.Email);
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
        <View>
          <TouchableOpacity
            style={{
              width: 54,
              height: 54,
              borderRadius: 30,
              backgroundColor: 'gray',
              alignSelf: 'center',
              top: 50,
              alignItems:'center',
              justifyContent:'center'

              
            }}
            onPress={() =>
              props.navigation.push('DetailComponent', {
                Email: props.route.params.Email,
              })
            }>
              <FontAwesome5Icon name='wallet' size={35} color='#ffff' />
            </TouchableOpacity>
          <Text
            style={{
              color: '#ffff',
              alignSelf: 'center',
              top: 60,
              fontWeight: 'bold',
            }}>
            Adresse
          </Text>
        </View>
      </View>
    </View>
  );
};

export default WalletClient;

const styles = StyleSheet.create({
  wallet: {
    flex: 1,
    backgroundColor: '#4D3A34',
  },
});
