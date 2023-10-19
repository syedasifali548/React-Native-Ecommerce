import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <>
     <StatusBar/>
     <View>
     {children}
     </View>
     <View  style={styles.footer}>
     <Footer/>
     </View>
    </>
  )
}

export default Layout

const styles = StyleSheet.create({
  footer:{
    display:'flex',
    flex:1,
    justifyContent:'flex-end',
    width:"100%",
    zIndex:100,
    borderTopWidth:1,
    position:"absolute",
    bottom:0,
    padding:10,
    borderColor:"lightgray"
  }
})