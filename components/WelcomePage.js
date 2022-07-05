import { StyleSheet, Text, View ,Image ,TouchableOpacity } from 'react-native'
import React from 'react'
const WelcomePage = () => {
  return (
    <View style={{flex:1}}>
      <View style={{flex:1, backgroundColor:"#4D3A34"}}>
      <Image source={require('../assets/akj.jpg')} style={styles.image} />
        <Text style={styles.text}>FAITE VOS ACHAT TOUT EN VOUS FAISANT DE L’ARGENT</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={{fontWeight:"bold",alignSelf:"center"}}>COMMENCER</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default WelcomePage

const styles = StyleSheet.create({
    image:{
      // flex:1
     width:'100%',
     height:400,
     top:10  
    },
    text:{
      color:"#ffff",
      fontSize:30,
      width:320,
      marginLeft:50,
      marginTop:20,
      lineHeight:41
    },
    button:{
      backgroundColor:"#ffff",
      width:330,
      marginLeft:50,
      height:44,
      marginTop:30,
      borderRadius:12,
      justifyContent:"center"
    }

})