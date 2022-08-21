import {View, Text} from 'react-native';
import React, {useEffect, useState,useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import WelcomePage from './components/WelcomePage';
import Login from './components/Login';
import LoginSuite from './components/LoginSuite';
import SignIn from './components/SignIn';
import WalletClient from './components/WalletCLient';
import DetailComponent from './components/DetailComponent';
import WalletLivreur from './components/WalletLivreur';
import MenuLivreur from './components/MenuLivreur';
import ViewPayementEspece from './components/ViewPayementEspece';
import ViewPayementPoint from './components/ViewPayementPoint';
import ViewScan from './components/ViewScan';
import {ViewPropTypes} from 'deprecated-react-native-prop-types';
import ViewDisconnect from './components/ViewDisconnect';
import { getToken } from './service/apiService';
import { UserContext } from './context/UserContext';
import ForgetPassword from './components/ForgetPassword';
const {Navigator, Screen} = createNativeStackNavigator();

export  const VerifyContext = React.createContext()

const App = ({props}) => {
  // const [islogged, setIsLogged] = useState(false);
  // const [user,setUser] = useContext(UserContext)
  const [homeShow,setHomeShow] = useState(false)

  const [token, setToken] = useState('');
  const [titre, setTitre] = useState('');

  useEffect(() => {
    getToken()
    .then((res)=>{
        // console.log(res)
        setToken(res)
        setTitre(res.titre)
        // console.log(titre,'et',token)
    })
    .catch((e)=>{
      console.log(e)
    })
    // const verify = async () => {
      
    //   if (titre==null) {
    //     setIsLogged(true);
    //   } else {
    //     setIsLogged(false);
    //   }
    //   console.log(islogged);
    // };
  }, [token]);
  return (
    
    <View style={{flex: 1}}>
            <VerifyContext.Provider value={[homeShow,setHomeShow]}>

      <NavigationContainer>
        <Navigator>
           {homeShow == false  && token == null ?(
            <>
             <Screen
               name="WelcomePage"
               component={WelcomePage}
               options={options => {
                 return {headerShown: false};
               }}
             />
             <Screen
               name="Connexion"
               component={Login}
               options={option => {
                 return {
                   headerTintColor: '#ffff',
                   headerStyle: {backgroundColor: '#58413A'},
                 };
               }}
             />
             <Screen
               name="connexion"
               component={LoginSuite}
               options={option => {
                 return {
                   headerTintColor: '#ffff',
                   headerStyle: {backgroundColor: '#58413A'},
                 };
               }}
             />
             <Screen
               name="Inscription"
               component={SignIn}
               options={option => {
                 return {
                   headerTintColor: '#ffff',
                   headerStyle: {backgroundColor: '#58413A'},
                 };
               }}
             />
             <Screen
             name='Mots De Passe Oublié'
             component={ForgetPassword}
             options={option => {
              return {
                headerTintColor: '#ffff',
                headerStyle: {backgroundColor: '#58413A'},
              };
            }}
             />
          </>
           ):(
             <>
           
              <Screen
                name="WalletClient"
                component={WalletClient}
                options={options => {
                  return {headerShown: false};
                }}
              />
              <Screen
                name="Adresse Wallet"
                component={DetailComponent}
                options={option => {
                  return {
                    headerTintColor: '#ffff',
                    headerStyle: {backgroundColor: '#58413A'},
                  };
                }}
              />
             
           
        
              <Screen
                name="MenuLivreur"
                component={MenuLivreur}
                options={option => {
                  return {
                    headerShown: false,
                  };
                }}
                />
         
            <Screen
              name="Envoie de point"
              component={ViewPayementEspece}
              options={option => {
                return {
                  headerTintColor: '#ffff',
                  headerStyle: {backgroundColor: '#58413A'},
                };
              }}
              />
            <Screen
              name="Retraire de point"
              component={ViewPayementPoint}
              options={option => {
                return {
                  headerTintColor: '#ffff',
                  headerStyle: {backgroundColor: '#58413A'},
                };
              }}
              />
            <Screen name="Profile" component={ViewDisconnect}
                options={option => {
                  return {
                    headerTintColor: '#ffff',
                    headerStyle: {backgroundColor: '#58413A'},
                  };
                }}
                />
           
                </>
           )}
              
       
          {/* <WelcomePage /> */}
          {/* <Login /> */}
          {/* <LoginSuite /> */}
          {/* <SignIn /> */}
          {/* <WalletClient /> */}
          {/* <DetailComponent /> */}
          {/* <WalletLivreur /> */}
          {/* <MenuLivreur /> */}
          {/* <ViewPayementEspece /> */}
          {/* <ViewScan /> */}
          {/* <ViewPayementPoint /> */}
          {/* <ViewDisconnect /> */}
        </Navigator>
      </NavigationContainer>
      </VerifyContext.Provider>
    </View>

  );
};

export default App;
