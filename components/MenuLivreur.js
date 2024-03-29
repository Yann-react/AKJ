import {StyleSheet, Text, View,TouchableOpacity, Dimensions} from 'react-native';
import React,{useEffect, useState} from 'react';
import axios from 'react-native-axios'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { getToken } from '../service/apiService';

const {height,width} = Dimensions.get('window')
const MenuLivreur = (props) => {
  const [nom,setNom]=useState('')
  const [email,setEmail] = useState('')
  
  const getInfo=()=>{
    axios
    .post(`https://back-akj-production.up.railway.app/api/getInfo`, {
      email: email
    })
    .then(res => {
      // console.log(res);
      console.log(res.data.nom);
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
      console.log("Data response wallet: ",res)
      setEmail(res.email)
    })
    .catch((e)=>{
      console.log("Error Data "+e)
    })
    getInfo()
      },[email])
  return (
    <View style={styles.wallet}>
      <View>
        <Text style={{fontWeight: 'bold', top: 50, left: 70,
              color:'#ffff'
            }}
            onPress={()=>props.navigation.push('Profile')}>
          {nom}
        </Text>
      </View>
      <View style={{display:'flex',flexDirection:'row',justifyContent:'center',justifyContent:'space-evenly',marginTop:height*0.33}}>
         <View>

          <TouchableOpacity
            style={{
              width: 54,
              height: 54,
              borderRadius: 30,
              backgroundColor: 'gray',
              alignSelf: 'center',
              top: 50,
              backgroundColor:'#8C7974',
              justifyContent:'center',
              alignItems:"center"
            }}
            onPress={()=>props.navigation.push('Retraire de point')}
            >
              <FontAwesome5Icon name='coins' size={35} color="#ffff" />
            </TouchableOpacity>
          <Text
            style={{
              alignSelf: 'center',
              top: 60,
              fontWeight: 'bold',
              width:90,
              textAlign:'center',
              color:'#ffff'
            }}>
            Payement par point
          </Text>
         </View>
         <View>

          <TouchableOpacity
            style={{
              width: 54,
              height: 54,
              borderRadius: 30,
              backgroundColor: 'gray',
              alignSelf: 'center',
              top: 50,
              backgroundColor:'#8C7974',
              justifyContent:'center',
              alignItems:"center"
              
            }}
            onPress={()=>props.navigation.push('Envoie de point')}>

              <FontAwesome5Icon name='hand-holding' size={30} color="#ffff" />
            </TouchableOpacity>
          <Text
            style={{
              alignSelf: 'center',
              top: 60,
              fontWeight: 'bold',
              width:90,
              textAlign:'center',
              color:'#ffff'
              
            }}
            >
            Payement en espèce
          </Text>
         </View>
         
        </View>
    </View>
  );
};

export default MenuLivreur;

const styles = StyleSheet.create({
  wallet: {
    flex: 1,
    backgroundColor: '#4D3A34',
  },
});
