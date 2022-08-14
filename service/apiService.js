import AsyncStorage from '@react-native-async-storage/async-storage';
import { useContext } from 'react';


export const storeToken = async (user) => {
    try {
        console.log("ok")
      await AsyncStorage.setItem('token', JSON.stringify(user));
    } catch (error) {
      console.log('[storeToken] error', error);
    }
  };
  


  export const getToken = async () => {
    try {
      let userData = await AsyncStorage.getItem('token');
      const data = JSON.parse(userData);
      return data;
    } catch (error) {
        console.log('Error token',error)
    }
}
 
    export  const removeToken = async () => {
        try {
            await AsyncStorage.clear()
        } catch(e) {
          // remove error
          console.log("Error",e)
        }
      
        console.log('Done.')
      }