import { View, Text } from 'react-native'
import React from 'react'
import WelcomePage from './components/WelcomePage'
import Login from './components/Login'
import LoginSuite from './components/LoginSuite'
import SignIn from './components/SignIn'
import WalletClient from './components/WalletClient'
import DetailComponent from './components/DetailComponent'
import WalletLivreur from './components/WalletLivreur'
import MenuLivreur from './components/MenuLivreur'

const App = () => {
  return (
    <View style={{flex:1}}>
      {/* <WelcomePage /> */}
      {/* <Login /> */}
      {/* <LoginSuite /> */}
      {/* <SignIn /> */}
      {/* <WalletClient /> */}
      {/* <DetailComponent /> */}
      {/* <WalletLivreur /> */}
      <MenuLivreur />
    </View>
  )
}

export default App