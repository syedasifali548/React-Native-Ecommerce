import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { categoriesData } from '../../../data/categoriesData'
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { useNavigation } from '@react-navigation/native';

const Category = () => {
    const navigation = useNavigation()
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
    <View style={styles.container}>
      {categoriesData?.map((item)=>(
        <View key={item?._id}>
        <TouchableOpacity style={styles.catContainer}
        onPress={()=>navigation.navigate(item.path)}
        >
        <FontAwesome name={item?.icon} style={styles.catIcon}/>
        <Text style={{color:"#fff"}}>{item?.name}</Text>
        </TouchableOpacity>
        </View>
      ))}
    </View>
    </ScrollView>
    
  )
}

export default Category

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#5272F2",
        color:'#fff',
        padding:5,
        flexDirection:'row',
    },
    catContainer:{
        padding:15,
        justifyContent:'center',
        alignItems:'center',
        color:'#fff',
        marginTop:2
    },
    catIcon:{
        fontSize:22,
        verticalAlign:'top',
        color:'#fff',
    }
})