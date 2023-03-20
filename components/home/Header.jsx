import { TouchableOpacity, Image, StyleSheet, View } from 'react-native'
import React from 'react'

const Header = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={{width: '100%', height: '100%'}} source={require('../../assets/logo.png')} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    width: 130, 
    height: 50,
    marginTop: 10, 
    marginRight: 'auto', 
    marginLeft: 'auto'
  }
})

export default Header