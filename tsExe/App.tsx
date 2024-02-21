import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Unity ,useUnityContext} from 'react-unity-webgl';
import WebView from 'react-native-webview';
const localWebGL = require("./assets/release/index.html")
export default function App() {
  
  return (
    <View style={styles.webView}>
      <WebView 
        source={localWebGL}/>
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
  }
});
