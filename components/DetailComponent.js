import {StyleSheet, Text, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'react-native-axios'
const DetailComponent = (props) => {
  const [code,setCode]=useState(0)
  const [nom,setNom]=useState('')
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
    axios
    .post(`http://10.0.2.2:3001/api/getNom`, {
      email: props.route.params.Email,
    })
    .then(res => {
      // console.log(res);
      console.log(res.data);
      setNom(res.data)
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
      <View>
        <Text style={{color: '#ffff', fontWeight: 'bold', top: 50, left: 70}}>
          {nom}
        </Text>
      </View>
      <View style={{flex:0.8,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontWeight:'bold',fontSize:15,color: '#ffff'}}>Code porte-feuille</Text>
        <Text style={{fontWeight:'bold',fontSize:50,marginTop:15,color: '#ffff'}}>{code}</Text>
      </View>
    </View>
  );
};

export default DetailComponent;

const styles = StyleSheet.create({
  wallet: {
    flex: 1,
    backgroundColor: '#4D3A34',
   },
});
