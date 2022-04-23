import { View, Text, StyleSheet, ImageBackground, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Login = ( {navigation} ) => {
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.navigate('stack')}>
              <View style={{
                flex: 1,
              }}>
                <Text>Log in</Text>
              </View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Login