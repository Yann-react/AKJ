import {StyleSheet, Text, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'react-native-axios'
import { getToken } from '../service/apiService';

const DetailComponent = (props) => {
  const [code,setCode]=useState(0)
  const [nom,setNom]=useState('')
  const [email,setEmail] = useState('')

  const getInfo=()=>{
    axios
    .post(`https://back-akj-production.up.railway.app/api/getInfo`, {
      email: email

  })
    .then(res => {
      // console.log(res);
      console.log(res.data);
      setCode(res.data.adresse)
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
