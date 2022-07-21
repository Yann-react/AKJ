import {StyleSheet, Text, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';

const DetailComponent = (props) => {
  const [code,setCode]=useState(0)
  
  useEffect(()=>{
    // setCode(parseInt(Math.random()*10000000))
    firestore()
  .collection('Users')
  .get()
  .then(querySnapshot => {
    querySnapshot.forEach(documentSnapshot => {
      // console.log('User ID: ',documentSnapshot.id, documentSnapshot.data().codeWallet);
      if(documentSnapshot.data().email==props.route.params.Email){
        setCode(documentSnapshot.data().codeWallet)
      }
    });
  });
  },[])
 
  return (
    <View style={styles.wallet}>
      <View>
        <Text style={{color: '#ffff', fontWeight: 'bold', top: 50, left: 70}}>
          Client
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
