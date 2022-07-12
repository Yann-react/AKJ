import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import React, {Component} from 'react';

export default class WalletClient extends Component {
  render() {
    return (
      <View style={styles.wallet}>
        <View>
          <Text
            style={{color: '#4D3A34', fontWeight: 'bold', top: 50, left: 70}}>
            Client
          </Text>
        </View>
        <View style={{top: 100, flex: 1}}>
          <Text
            style={{
              color: '#4D3A34',
              alignSelf: 'center',
              marginTop: 170,
              fontSize: 80,
              fontWeight: 'bold',
            }}>
            K 100
          </Text>
          <View>
          <TouchableOpacity style={{width:54,height:54,borderRadius:7,backgroundColor:'gray',alignSelf:"center",top:50}}>
          </TouchableOpacity>
          <Text style={{color:'black',alignSelf:'center',top:60,fontWeight:'bold'}}>
            Adresse
          </Text>
          </View>
        </View>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wallet: {
    flex: 1,
    backgroundColor: '#ffff',
  },
});
