import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native'
import React from 'react'

export default function ViewPayementPoint() {
  return (
    <View style={styles.wallet}>
        <View style={{flex:0.4,height:10,justifyContent:'space-between',marginTop:150}}>
      <TextInput
      placeholder='Adresse du destinataire'
      style={{borderWidth:1,width:'90%',alignSelf:'center',borderRadius:13,borderColor:'#948A8A'}}
      />
      <TextInput
      placeholder='Point a retirer'
      style={{borderWidth:1,width:'90%',alignSelf:'center',borderRadius:13,borderColor:'#948A8A'}}
      />
      <TouchableOpacity style={{borderWidth:1,width:'30%',alignSelf:'center',height:38,justifyContent:'center',borderRadius:17,backgroundColor:'#ffff'}}>
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
  