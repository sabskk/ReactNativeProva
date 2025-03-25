import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Home from './screens/home';
import Login from './screens/login';

export default function App() {
  return (
    <View style={app.container}>
      <Home/>
    </View>
  );
}

const app = StyleSheet.create({
  container:{
    flex:1,
  }
})