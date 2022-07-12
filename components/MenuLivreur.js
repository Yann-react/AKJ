import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React from 'react';

const MenuLivreur = () => {
  return (
    <View style={styles.wallet}>
      <View>
        <Text style={{color: '#4D3A34', fontWeight: 'bold', top: 50, left: 70}}>
          Client
        </Text>
      </View>
      <View style={{display:'flex',flexDirection:'row',justifyContent:'center',justifyContent:'space-evenly',marginTop:290}}>
         <View>

          <TouchableOpacity
            style={{
              width: 54,
              height: 54,
              borderRadius: 7,
              backgroundColor: 'gray',
              alignSelf: 'center',
              top: 50,
            }}></TouchableOpacity>
          <Text
            style={{
              color: 'black',
              alignSelf: 'center',
              top: 60,
              fontWeight: 'bold',
            }}>
            Adresse
          </Text>
         </View>
         <View>

          <TouchableOpacity
            style={{
              width: 54,
              height: 54,
              borderRadius: 7,
              backgroundColor: 'gray',
              alignSelf: 'center',
              top: 50,
            }}></TouchableOpacity>
          <Text
            style={{
              color: 'black',
              alignSelf: 'center',
              top: 60,
              fontWeight: 'bold',
            }}>
            Adresse
          </Text>
         </View>
         <View>

          <TouchableOpacity
            style={{
              width: 54,
              height: 54,
              borderRadius: 7,
              backgroundColor: 'gray',
              alignSelf: 'center',
              top: 50,
            }}></TouchableOpacity>
          <Text
            style={{
              color: 'black',
              alignSelf: 'center',
              top: 60,
              fontWeight: 'bold',
            }}>
            Adresse
          </Text>
         </View>
         
        </View>
    </View>
  );
};

export default MenuLivreur;

const styles = StyleSheet.create({
  wallet: {
    flex: 1,
    backgroundColor: '#ffff',
  },
});
