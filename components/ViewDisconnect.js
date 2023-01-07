import {Dimensions, StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect, useState, useContext} from 'react';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import axios from 'react-native-axios';
import {getToken, removeToken} from '../service/apiService';
import {VerifyContext} from '../App';

const {height, width} = Dimensions.get('window');
export default function ViewDisconnect(props) {
  const [nom, setNom] = useState('');
  const [titre, setTitre] = useState('');
  const [email, setEmail] = useState('');
  const [homeShow, setHomeShow] = useContext(VerifyContext);

  const logout = () => {
    // props.navigation.push("WelcomePage")
    setHomeShow(false);
    removeToken();
    console.log(homeShow);
    // console.log()
  };
  const getInfo = () => {
    axios
      .post(`https://back-akj-production.up.railway.app/api/getInfo`, {
        email: email,
      })
      .then(res => {
        // console.log(res);
        console.log(res.data);
        setNom(res.data.nom);
        setTitre(res.data.titre);
      })
      .catch(error => {
        if (error.response) {
          console.log('rror sur rsp');
        } else if (error.request) {
          console.log('error sur requet');
        }
      });
  };
  useEffect(() => {
    getToken()
      .then(res => {
        setEmail(res.email);
        console.log('Data response wallet: ', res);
      })
      .catch(e => {
        console.log('Error Data ' + e);
      });
    getInfo();
  }, [email]);
  return (
    <View
      style={{flex: 1, backgroundColor: '#4D3A34', justifyContent: 'center'}}>
      <View
        style={{
          borderColor: 'red',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <View>
          <FontAwesome5Icon name='user-circle' size={160} color="#ffff" />
          {/* <Image
            source={require('../assets/image3.jpg')}
            style={styles.image}
          /> */}
        </View>
        <View style={{marginTop: height * 0.01}}>
          <Text style={{fontSize: 35, color: '#ffff', fontWeight: 'bold'}}>
            {nom}
          </Text>
          <Text style={{fontSize: 20, color: '#ffff', alignSelf: 'center'}}>
            {titre}
          </Text>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginBottom: height / 400,
        }}>
        <FontAwesome5Icon
          name="power-off"
          size={75}
          color="#ffff"
          onPress={logout}
          style={{marginTop: height / 25}}
        />
        <Text
          style={{
            fontSize: 25,
            color: '#ffff',
            marginBottom: height / 4,
            marginTop: height / 400,
          }}>
          Deconnection
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: width/2.4,
    height: height/4.2,
    borderRadius: 400 / 2,
  },
});
