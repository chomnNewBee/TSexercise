import { StatusBar } from 'expo-status-bar';
import { Button, Dimensions, StyleSheet, Text, View } from 'react-native';
import { Unity ,useUnityContext} from 'react-unity-webgl';
import WebView from 'react-native-webview';
import React, { createRef, useRef } from 'react';
//require("./assets/release/index.html")
const localWebGL = require("./assets/release/index.html")
export default function App() {
  const [fromUnity,setMessageFromUniyt] = React.useState('')
  



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

      
      <Text>{`I am react native lable,this is message from unity:   ${fromUnity}`}</Text>
      <Button title='React Native Button to rotate cube'
      onPress={toUnity}/>
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
    height:Dimensions.get("window").height/1.3
  }
});
