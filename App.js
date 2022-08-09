import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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

const {Navigator, Screen} = createNativeStackNavigator();

const App = () => {
  return (
    <View style={{flex: 1}}>
      <NavigationContainer>
        <Navigator>
          <Screen
            name="WelcomePage"
            component={WelcomePage}
            options={options => {
              return {headerShown: false};
            }}
          />
          <Screen
            name="Login"
            component={Login}
            options={option => {
              return {
                headerTintColor: '#ffff',
                headerStyle: {backgroundColor: '#58413A'},
              };
            }}
          />
          <Screen
            name="LoginSuite"
            component={LoginSuite}
            options={option => {
              return {
                headerTintColor: '#ffff',
                headerStyle: {backgroundColor: '#58413A'},
              };
            }}
          />
          <Screen
            name="SignIn"
            component={SignIn}
            options={option => {
              return {
                headerTintColor: '#ffff',
                headerStyle: {backgroundColor: '#58413A'},
              };
            }}
          />
          <Screen
            name="WalletClient"
            component={WalletClient}
            options={options => {
              return {headerShown: false};
            }}
          />
          <Screen name="WalletLivreur" component={WalletLivreur} />
          <Screen name="Adresse Wallet" component={DetailComponent}         options={option => {
              return {
                headerTintColor: '#ffff',
                headerStyle: {backgroundColor: '#58413A'},
              };
            }}  />
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
          <Screen name="Profile" component={ViewDisconnect} />
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
    </View>
  );
};

export default App;
