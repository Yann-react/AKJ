import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import firestore from '@react-native-firebase/firestore';



export default function ViewPayementEspece() {
  const [adresse,setAdresse]=useState('')
  const [montant,setMontant]=useState('')

  const sendPoint = ()=>{

    firestore()
    .collection('Users')
    .where('codeWallet','==',124567)
    .then(querySnapshot => {
      // console.log('Total users: ', querySnapshot.size);
  
      querySnapshot.forEach(documentSnapshot => {
        console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
            
            console.log(documentSnapshot.data().codeWallet)
            if(documentSnapshot.data().codeWallet == 124567){
              documentSnapshot.data().solde = documentSnapshot.data().solde + 1
              docu
              console.log(documentSnapshot.data().solde)
            }else{
              console.log('no')
            }
      })
      
    }).catch((error)=>{
      console.log((error))
    })
  }

  return (
    <View style={styles.wallet}>
        <View style={{flex:0.4,height:10,justifyContent:'space-between',marginTop:150}}>
      
      <TextInput
      placeholder='Adresse du destinataire'
      style={{borderWidth:1,width:'90%',alignSelf:'center',borderRadius:13,borderColor:'#948A8A'}}
      onChange={adresse=>setAdresse(adresse)}
      />
      <Text style={{position:'absolute',left:330,top:10}}>Scan</Text>
      <TextInput
      placeholder='Montant payé'
      style={{borderWidth:1,width:'90%',alignSelf:'center',borderRadius:13,borderColor:'#948A8A'}}
      onChange={montant=>setMontant(montant)}

      />
      <TouchableOpacity style={{borderWidth:1,width:'30%',alignSelf:'center',height:38,justifyContent:'center',borderRadius:17,backgroundColor:'#ffff'}}
      onPress={()=>sendPoint()}
      >
        <Text style={{textAlign:'center',fontWeight:'bold',color:'#4D3A34'}}>Envoyer</Text>
      </TouchableOpacity>

        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    wallet: {
      flex: 1,
      backgroundColor: '#4D3A34',
    },
  });
  