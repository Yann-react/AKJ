import {StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import React,{useState} from 'react';

const MenuLivreur = (props) => {
    const [value,setValue]=useState(0)
    const but = ()=>{
        setValue(value+1)
    }
  return (
    <View style={styles.wallet}>
      <View>
        <Text style={{fontWeight: 'bold', top: 50, left: 70,
              color:'#ffff'
            }}>
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
              backgroundColor:'#8C7974'
            }}
            onPress={()=>props.navigation.push('ViewPayementPoint')}
            ></TouchableOpacity>
          <Text
            style={{
              alignSelf: 'center',
              top: 60,
              fontWeight: 'bold',
              width:90,
              textAlign:'center',
              color:'#ffff'
            }}>
            Payement par point
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
              backgroundColor:'#8C7974'


            }}
            onPress={()=>props.navigation.push('WalletLivreur')}
            ></TouchableOpacity>
          <Text
            style={{
              alignSelf: 'center',
              top: 60,
              fontWeight: 'bold',
              color:'#ffff'
            }} 
            >
            Porte Feuille
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
              backgroundColor:'#8C7974'
              
            }}
            onPress={()=>props.navigation.push('ViewPayementEspece')}

            ></TouchableOpacity>
          <Text
            style={{
              alignSelf: 'center',
              top: 60,
              fontWeight: 'bold',
              width:90,
              textAlign:'center',
              color:'#ffff'
              
            }}
            >
            Payement en espèce
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
    backgroundColor: '#4D3A34',
  },
});
