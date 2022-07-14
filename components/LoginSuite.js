import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React , {useEffect}from 'react';

const LoginSuite = (props) => {
    
  return (
    <View style={{flex: 1, backgroundColor: '#4D3A34'}}>
      <View style={{flex: 1}}>
        <Image source={require('../assets/akj.jpg')} style={styles.image} />
        <Text
          style={{
            color: '#ffff',
            fontSize: 35,
            marginTop: -130,
            fontWeight: 'bold',
            left: 10,
          }}>
          Connexion
        </Text>
      </View>
      <View style={styles.boxLog}>
        <View>
          <Text
            style={{
              bottom: 90,
              width: '90%',
              alignSelf: 'center',
              fontWeight: 'bold',
              fontSize: 20,
              color: '#4D3A34',
            }}>
            {props.route.params.nom}
          </Text>
          <TextInput
            style={{
              backgroundColor: '#8C7974',
              width: '90%',
              alignSelf: 'center',
              bottom: 70,
              marginBottom: 30,
              borderRadius: 8,
              height: 60,
            }}
            placeholder="Mots de passe"
          />
        </View>
        <View style={{height: 70, width: '90%', alignSelf: 'center'}}>
          <TouchableOpacity
            style={{
              width: '90%',
              alignSelf: 'center',
              height: 44,
              borderRadius: 8,
              justifyContent: 'center',
              backgroundColor: '#ffff',
              marginTop: -60,
            }}  onPress={()=> props.navigation.push('WalletClient')}>
            <Text
              style={{alignSelf: 'center', fontWeight: 'bold', color: '#4D3A34'}}>
              CONTINUER
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              alignSelf: 'center',
              marginTop: 50,
              color: '#4D3A34',
              fontWeight:'bold'
            }}>
            Vous avez oublié votre mots de passe?
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LoginSuite;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 400,
    top: 10,
  },
  boxLog: {
    flex: 1,
    paddingTop: 120,
    width: '95%',
    alignSelf: 'center',
    bottom: 20,
    borderRadius: 10,
    backgroundColor: '#ffff',
    opacity: 0.8,
  },
});
