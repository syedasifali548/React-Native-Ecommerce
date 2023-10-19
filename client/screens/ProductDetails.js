import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ProductsData } from '../data/productData';

const ProductDetails = ({route}) => {
  // console.log(route);
  const [pDetails,setPDetails] = useState({})
  const {params} = route;
   
  // Get Product Details
  useEffect(()=>{
    const getProducts = ProductsData?.find((p)=>{
      return p?._id === params?._id
    })
    setPDetails(getProducts)
  },[params?._id])

  return (
    <View>
      <Image source={{uri:pDetails?.imageUrl}} style={styles.image} />
      <View style={styles.container}>
      <Text style={styles.title}>{pDetails?.name}</Text>
      <Text style={styles.price}>Price : {pDetails?.price} $</Text>
      <Text style={styles.desc}>Price : {pDetails?.description} $</Text>
      </View>
    </View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
  image:{
    height: 300,
    width: "100%",
    marginTop:3
  },
  container:{
    marginHorizontal:10,
    marginVertical:15,
    padding:5
  },
  title:{
    fontSize:18,
    fontWeight:'bold',
    textAlign:'left',
    marginVertical:6
  },
  price:{
    fontSize:18,
    fontWeight:'bold',
    color:"#ED7D31"
  },
  desc:{
    fontSize:12,
    textTransform:'capitalize',
    textAlign: "justify",
    marginVertical: 10,
  }
})