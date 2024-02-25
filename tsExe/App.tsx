import { StatusBar } from 'expo-status-bar';
import { Button, Dimensions, StyleSheet, Text, View } from 'react-native';
import { Unity ,useUnityContext} from 'react-unity-webgl';
import WebView from 'react-native-webview';
import React, { createRef, useRef } from 'react';
//require("./assets/release/index.html")
const localWebGL = require("./assets/release/index.html")
export default function App() {
  const [fromUnity,setMessageFromUniyt] = React.useState('')
  
  const switchMale = ()=>{
    console.log("character1")
    webview.postMessage("character1")
  }
  const switchFemale = ()=>{
    console.log("character2")
    webview.postMessage("character2")
  }



// biome-ignore lint/suspicious/noExplicitAny: <explanation>
  let   webview:any = null
  const toUnity = ()=>{
      //alert("1")
      webview.postMessage("toUnity")
  }
  
  const  handleFromUnity = (str:string)=>{
    setMessageFromUniyt(str)
  }
  return (
    <View style={styles.webView}>
      <WebView 
      source={localWebGL}
      onMessage={(e)=>{handleFromUnity(e.nativeEvent.data)}}
      ref={(ref)=>{webview=ref}}/>

      <View style={styles.male}>
        <Button title='character1' onPress={switchMale}/>
      </View>

      <View style={styles.female}>
        <Button title='character2' onPress={switchFemale}/>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  webView:{
    width:Dimensions.get('window').width,
    height:Dimensions.get("window").height
  },
  male:{
    position:"absolute",
    top:70,
    width:100,
    height:50
  },
  female:{
    position:"absolute",
    top:150,
    width:100,
    height:50
  }
});
