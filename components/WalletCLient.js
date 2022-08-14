import {StyleSheet, Text, View, TouchableOpacity,RefreshControl,Dimensions,ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {TabRouter} from '@react-navigation/native';
import axios from 'react-native-axios';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getToken } from '../service/apiService';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const {height,width} = Dimensions.get('window')

const WalletClient = props => {
  const [nom,setNom]=useState('')
  const [solde,setSolde]=useState(0)
  const [refreshing, setRefreshing] = useState(false);
  const [email,setEmail] = useState('')

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
    getInfo()
  }, [email]);
  const getInfo= ()=>{
    axios
      .post(`http://10.0.2.2:3001/api/getInfo`, {
        email: email
      })
      .then(res => {
        // console.log(res);
        console.log(res.data);
        setNom(res.data.nom)
        setSolde(res.data.solde)
      })
      .catch(error => {
        if (error.response) {
          console.log('rror sur rsp');
        } else if (error.request) {
          console.log('error sur requet');
        }
      });
  }
  useEffect(()=>{
    getToken()
    .then((res)=>{
      setEmail(res.email)
      console.log("Data response wallet: ",res.titre)
    })
    .catch((e)=>{
      console.log("Error Data "+e)
    })
    getInfo()
  },[email])
  return (
    <ScrollView
    refreshControl={
      <RefreshControl
      refreshing={refreshing}
      onRefresh={onRefresh}
      />
    }
>
    <View style={styles.wallet}>
      <View>
        <Text style={{color: '#ffff', fontWeight: 'bold', top: 50, left: 70}} onPress={()=>props.navigation.push('Profile')}>
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
              props.navigation.push('Adresse Wallet')
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
    </ScrollView>
  );
};

export default WalletClient;

const styles = StyleSheet.create({
  wallet: {
    flex: 1,
    backgroundColor: '#4D3A34',
    height:height

  },
});
