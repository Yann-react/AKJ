import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const DetailComponent = () => {
  return (
    <View style={styles.wallet}>
      <View>
        <Text style={{color: '#4D3A34', fontWeight: 'bold', top: 50, left: 70}}>
          Client
        </Text>
      </View>
      <View>
        <Text>Details</Text>
        
      </View>
    </View>
  );
};

export default DetailComponent;

const styles = StyleSheet.create({
  wallet: {
    flex: 1,
    backgroundColor: '#ffff',
  },
});
