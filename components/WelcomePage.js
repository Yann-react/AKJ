import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
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
            style={{fontWeight: 'bold', color: '#4D3A34', marginRight:20}}>
            COMMENCER
          </Text>
          <FontAwesome5 name='arrow-right' size={20} color='#4D3A34' />
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
    display:'flex',
    flexDirection:'row',
    alignItems:'center'
  },
});
