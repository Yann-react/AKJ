import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useEffect ,useState , useContext} from 'react'
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5'
import axios from 'react-native-axios'
import { getToken, removeToken } from '../service/apiService';
import { VerifyContext } from '../App';


const {height,width}=Dimensions.get('window')
export default function ViewDisconnect(props) {
    const [nom,setNom]=useState('')
    const [titre,setTitre]=useState('')
    const [email,setEmail] = useState('')
    const [homeShow,setHomeShow] = useContext(VerifyContext)

    const logout=()=>{
      // props.navigation.push("WelcomePage")
      setHomeShow(false)
      removeToken()
      console.log(homeShow)
      // console.log()


      
    }
    const getInfo =()=>{
      axios
      .post(`http://10.0.2.2:3001/api/getInfo`, {
        email: email
      })
      .then(res => {
        // console.log(res);
        console.log(res.data);
        setNom(res.data.nom)
        setTitre(res.data.titre)

      })
      .catch(error => {
        if (error.response) {
          console.log('rror sur rsp');
        } else if (error.request) {
          console.log('error sur requet');
        }
      });

    }
    useEffect(()=>{
      getToken()
      .then((res)=>{
        setEmail(res.email)
        console.log("Data response wallet: ",res)
      })
      .catch((e)=>{
        console.log("Error Data "+e)
      })
      getInfo()
    },[email])
  return (
    <View style={{flex: 1, backgroundColor: '#4D3A34',justifyContent:'center'}}>
        <View style={{borderColor:'red',display:'flex',flexDirection:'column',alignItems:'center'}}>
            <View style={{borderWidth:1,width:200,height:200,borderRadius:100}}></View>
            <View style={{marginTop:height*0.01}}>
                <Text style={{fontSize:35,color:'#ffff',fontWeight:'bold'}}>{nom}</Text>
                <Text style={{fontSize:20,color:'#ffff',alignSelf:'center'}}>{titre}</Text>
            </View>
        </View>
        <View style={{borderColor:'green',display:'flex',flexDirection:'column',alignItems:'center',marginTop:height*0.03}}>
            <FontAwesome5Icon name='power-off' size={75} color='#ffff' onPress={logout} />
            <Text style={{fontSize:25,color:'#ffff',marginTop:height*0.02}}>Deconnection</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({})