import { StyleSheet, Text, View ,Image, TouchableOpacity ,TextInput } from 'react-native'
import React from 'react'

const LoginSuite = () => {
  return (
    <View style={{flex:1, backgroundColor:"#4D3A34"}}>
        <View style={{flex:1}}>
            <Image source={require('../assets/akj.jpg')} style={styles.image} />
            <Text style={{color:"#ffff",fontSize:35,marginTop:-100,fontWeight:"bold",left:10}}>Connexion</Text>
        </View>
        <View style={styles.boxLog}>
            <View>
                <Text style={{bottom:90,width:"90%",alignSelf:"center",fontWeight:"bold",fontSize:20}}>DIABY LE CHIEN</Text>
                <TextInput style={{borderWidth:1 ,backgroundColor:"red",width:"90%",alignSelf:"center",bottom:70,marginBottom:30}} placeholder='Mots de passe' />
            </View>
            <View style={{height:70,width:"90%",alignSelf:"center"}}>
            <TouchableOpacity style={{width:"90%",alignSelf:"center",height:44,borderRadius:8,justifyContent:"center",backgroundColor:"#ffff",marginTop:-60}}>
                <Text style={{alignSelf:"center",fontWeight:"bold",color:"black"}}>CONTINUER</Text>
            </TouchableOpacity>
        <Text style={{width:"90%",alignSelf:"center",marginTop:30}}>Vous avez oublié votre mots de passe?</Text>
            </View>
        </View>
    </View>
  )
}

export default LoginSuite

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