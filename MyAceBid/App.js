import { View, Text, StyleSheet,SafeAreaView } from 'react-native'
import React, {useState}  from 'react'
import Router from './router'

const App = () => {
  const [showAuthPage, setAuthPage] = useState(true);
    return(
      <Router/>
    )



}


const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
  },
});


export default App