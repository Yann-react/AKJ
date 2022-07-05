import { StyleSheet, Text, View , Image , TextInput, TouchableOpacity} from 'react-native'
import React from 'react'

const Login = () => {
  return (
    <View style={{flex:1, backgroundColor:"#4D3A34"}}>
    <View style={{flex:1}}>
    <Image source={require('../assets/akj.jpg')} style={styles.image} />
    <Text style={{color:"#ffff",fontSize:35,marginTop:-100,fontWeight:"bold",left:10}}>Bienvenue</Text>
    </View>
    <View style={styles.boxLog}>
      <TextInput style={{borderWidth:1 ,backgroundColor:"red",width:"90%",alignSelf:"center",bottom:70}} placeholder='Email'  />
      <TouchableOpacity style={{width:"90%",alignSelf:"center",height:44,
      marginTop:-40,
      borderRadius:8,justifyContent:"center",backgroundColor:"#ffff",marginBottom:15}}>
        <Text style={{alignSelf:"center",fontWeight:"bold",color:"black"}}>CONTINUER</Text>
      </TouchableOpacity>
      <Text style={{alignSelf:"center",fontSize:20,fontWeight:"bold",marginTop:10}}>OU</Text>
      <TouchableOpacity style={{width:"90%",alignSelf:"center",height:44,
      marginTop:18,
      borderRadius:8,justifyContent:"center",backgroundColor:"#ffff"}}>
        <Text style={{alignSelf:"center",fontWeight:"bold",color:"black"}}>Continuez sur Google</Text>
      </TouchableOpacity>
      <View style={{marginTop:60,height:70,justifyContent:"space-between",width:"90%",alignSelf:"center"}}>
        <Text>Vous n'avez pas de compte ? Incription</Text>
        <Text>Vous avez oublié votre mots de passe?</Text>
      </View>
    </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  image:{
   width:'100%',
   height:400,
   top:10  
  },
  boxLog:{
    flex:1,
    paddingTop:120,
    width:"95%",
    alignSelf:"center",
    bottom:20,
    borderRadius:10,
    backgroundColor:"#ffff",
    opacity:0.3,
    
  }
})