import { View, Text, StyleSheet, ImageBackground, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = ( {navigation} ) => {
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => navigation.navigate('Bidding')}>
              <View style={{
                flex: 1,
              }}>
                <Text>Log in</Text>
              </View>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Home