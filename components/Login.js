import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,Dimensions,ScrollView,Alert
} from 'react-native';
import React ,{useState} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const {height,width} = Dimensions.get('window')


const Login = props => {


  const [email,setEmail]=useState('')


  const image = require('../assets/akj.jpg');

  const Togo = () => {
      props.navigation.push('connexion', {
      Email:email,
            });
  };

  return (
    <ScrollView>
    <View style={{flex: 1, backgroundColor: '#4D3A34'}}>
      {/* <ImageBackground source={image} resizeMode="cover" style={styles.image}> */}
      <View style={{flex: 1}}>
        <Image source={require('../assets/akj.jpg')} style={styles.image} />
        <Text style={styles.titleText}>Bienvenue</Text>
      </View>
      <View style={styles.boxLog}>
        <TextInput style={styles.inputEmail} placeholder="Email:exemple@gmail.com" onChangeText={email=>setEmail(email)}
            value={email} />
        <TouchableOpacity style={styles.buttomCon} onPress={() => Togo()}>
          <Text
            style={{alignSelf: 'center', fontWeight: 'bold', color: '#4D3A34'}}>
            CONTINUER
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 20,
            fontWeight: 'bold',
            marginTop: height*0.01,
            color: '#ffff',
          }}>
          OU
        </Text>
        <TouchableOpacity
          style={{
            width: '90%',
            alignSelf: 'center',
            height: height*0.06,
            marginTop: height*0.018,
            borderRadius: 8,
            justifyContent: 'center',
            backgroundColor: '#ffff',
            display:'flex',
            flexDirection:'row',
            alignItems:'center'
          }}
          onPress={()=>{
            Alert.alert(
              "Connexion avec google",
              "Service momentanement indisponible",
              [
                { text: "OK", onPress: () => console.log("OK Pressed") }
              ]
            );
          }
        }
          >
            <FontAwesome5 name='google' size={15}  color="#4D3A34"/>
          <Text
            style={{ fontWeight: 'bold', color: '#4D3A34',marginLeft:10}}>
            Continuez sur Google
          </Text>
        </TouchableOpacity>
        <View
          style={{
            marginTop: height/20,
            height:height/10,
            justifyContent: 'space-between',
            width:width/0.9,
            alignSelf: 'center',
          }}>
          <Text
            style={{alignSelf: 'center', color: '#4D3A34', fontWeight: 'bold'}}
            onPress={() => props.navigation.push('Inscription')}>
            Vous n'avez pas de compte ?<Text style={{textDecorationLine:"underline"}}>Inscription</Text>
          </Text>
          <Text
            style={{alignSelf: 'center', color: '#4D3A34', fontWeight: 'bold'}}  onPress={()=>{props.navigation.push('Mots De Passe Oublié')}}>
            Vous avez oublié votre mots de passe?
          </Text>
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  image: {
    width: width,
    height:height*0.5,
  },
  boxLog: {
    flex: 1,
    paddingTop: width*0.1,
    width: width*0.95,
    alignSelf: 'center',    
    borderRadius: 10,
    backgroundColor: '#ffff',
    opacity: 0.75,
    alignContent:"center",
    height:height*0.54

  },
  titleText: {
    color: '#ffff',
    fontSize: 35,
    marginTop: -130,
    fontWeight: 'bold',
    left: width*0.04,
  },
  inputEmail: {
    backgroundColor: '#8C7974',
    width: width*0.9,
    alignSelf: 'center',
    bottom:height*0.01,
    borderRadius: 8,
  },
  buttomCon: {
    width: width*0.82,
    alignSelf: 'center',
    height:height*0.054,
    marginTop: height*0.02,
    borderRadius: 8,
    justifyContent: 'center',
    backgroundColor: '#ffff',
  },
});
