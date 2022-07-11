import { StyleSheet, Text, View ,Image, TouchableOpacity ,TextInput } from 'react-native'
import React from 'react'


const Signin = () => {
  return (
    <View style={{flex:1, backgroundColor:"#4D3A34"}}>
        <View style={{flex:1}}>
            <Image source={require('../assets/akj.jpg')} style={styles.image} />
            <Text style={{color:"#ffff",fontSize:35,marginTop:-100,fontWeight:"bold",left:10}}>Incription</Text>
        </View>
        <View style={styles.boxLog}>
            <View>
                <TextInput style={{backgroundColor:"#8C7974",borderRadius:8,width:"90%",alignSelf:"center",bottom:70,marginBottom:30}} placeholder='Nom'  />
                <TextInput style={{backgroundColor:"#8C7974",borderRadius:8,width:"90%",alignSelf:"center",bottom:70}} placeholder='Email'  />
                <TextInput style={{backgroundColor:"#8C7974",borderRadius:8,width:"90%",alignSelf:"center",bottom:70,marginTop:30}} placeholder='Mots de passe'  />
            </View>
            <View style={{height:70,width:"90%",alignSelf:"center"}}>
                <Text style={{marginBottom:30,color:'#4D3A34'}}>* J'ai lu et j'accepte les conditions d'utilisation et la politique de confidentialité de akj.</Text>
            <TouchableOpacity style={{width:"90%",alignSelf:"center",height:44,borderRadius:8,justifyContent:"center",backgroundColor:"#ffff",marginTop:10}}>
                <Text style={{alignSelf:"center",fontWeight:"bold",color:"black"}}>J'accepte et continue</Text>
            </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default Signin

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
         opacity:0.8,
       }
})