import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import WelcomePage from './components/WelcomePage';
import Login from './components/Login';
import LoginSuite from './components/LoginSuite';
import SignIn from './components/SignIn';
import WalletClient from './components/WalletClient';
import DetailComponent from './components/DetailComponent';
import WalletLivreur from './components/WalletLivreur';
import MenuLivreur from './components/MenuLivreur';

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
              return {title: null, headerStyle: {backgroundColor: '#4D3A34'}};
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
          <Screen name="WalletClient" component={WalletClient} />
          <Screen name="WalletLivreur" component={WalletLivreur} />
          <Screen name="DetailComponent" component={DetailComponent} />
          <Screen name="MenuLivreur" component={MenuLivreur} />
          {/* <WelcomePage /> */}
          {/* <Login /> */}
          {/* <LoginSuite /> */}
          {/* <SignIn /> */}
          {/* <WalletClient /> */}
          {/* <DetailComponent /> */}
          {/* <WalletLivreur /> */}
          {/* <MenuLivreur /> */}
        </Navigator>
      </NavigationContainer>
    </View>
  );
};

export default App;
