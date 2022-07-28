import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';

const WelcomePage = props => {

  
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: '#4D3A34'}}>
        <Image source={require('../assets/akj.jpg')} style={styles.image} />
        <Text style={styles.text}>
          FAITE VOS ACHAT TOUT EN VOUS FAISANT DE L’ARGENT
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate('Login')}>
          <Text
            style={{fontWeight: 'bold', alignSelf: 'center', color: '#4D3A34'}}>
            COMMENCER
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomePage;

const styles = StyleSheet.create({
  image: {
    // flex:1
    width: '100%',
    height: 400,
    top: 10,
  },
  text: {
    color: '#ffff',
    fontSize: 30,
    width: 320,
    marginLeft: 50,
    marginTop: 20,
    lineHeight: 41,
  },
  button: {
    backgroundColor: '#ffff',
    width: 330,
    marginLeft: 50,
    height: 44,
    marginTop: 30,
    borderRadius: 12,
    justifyContent: 'center',
  },
});
