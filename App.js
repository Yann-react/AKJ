import { View, Text } from 'react-native'
import React from 'react'
import WelcomePage from './components/WelcomePage'
import Login from './components/Login'
import LoginSuite from './components/LoginSuite'
import SignIn from './components/SignIn'


const App = () => {
  return (
    <View style={{flex:1}}>
      {/* <WelcomePage /> */}
      {/* <Login /> */}
      <LoginSuite />
      {/* <SignIn /> */}
    </View>
  )
}

export default App