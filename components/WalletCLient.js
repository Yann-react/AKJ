import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {TabRouter} from '@react-navigation/native';

const WalletClient = props => {
  return (
    <View style={styles.wallet}>
      <View>
        <Text style={{color: '#ffff', fontWeight: 'bold', top: 50, left: 70}}>
          {props.route.params.Nom}
        </Text>
      </View>
      <View style={{top: 100, flex: 1}}>
        <Text
          style={{
            color: '#ffff',
            alignSelf: 'center',
            marginTop: 170,
            fontSize: 80,
            fontWeight: 'bold',
          }}>
          K {props.route.params.Solde}
        </Text>
        <View>
          <TouchableOpacity
            style={{
              width: 54,
              height: 54,
              borderRadius: 7,
              backgroundColor: 'gray',
              alignSelf: 'center',
              top: 50,
            }}
            onPress={()=>props.navigation.push('DetailComponent',{Email:props.route.params.Email})}
            ></TouchableOpacity>
          <Text
            style={{
              color: '#ffff',
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

export default WalletClient;

const styles = StyleSheet.create({
  wallet: {
    flex: 1,
    backgroundColor: '#4D3A34',
  },
});
