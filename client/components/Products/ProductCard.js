import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import React from 'react'
import Products from './Products'
import { useNavigation } from '@react-navigation/native'

const ProductCard = ({p}) => {
    const navigation = useNavigation()
    
    // Read more text functionality

    const handleMoreButton = (id) => {
        navigation.navigate("productdetails", { _id: id });
        console.log(id);
      };
    
       //ADD TO CART
      
       const handleAddCart = ()=>{
        alert("Added to Cart!")
       }

    return (
        <View style={styles.mainConatiner}>
        <View style={styles.cardConatiner}>
        <Image style={
                        styles.imgeUri
                    }
                    source={
                        {
                            uri: p ?. imageUrl
                        }
                    }/>
                <Text style={
                    styles.ProductName
                }>
                {
                    p ?. name
                }</Text>
                <Text style={
                    styles.ProductDesc
                }>
                    {
                        p ?. description ?. substring(0, 30)
                    }
                    ...more</Text>
                    <View style={styles.BtnGroup}>
                    <TouchableOpacity style={styles.btn}
                    onPress={() => handleMoreButton(p._id)}
                    >
                    <Text style={styles.btnText}>Details</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}
                    onPress={handleAddCart}
                    >ADD TO CART</Text>
                    </TouchableOpacity>
                    </View>
                    </View>
                    </View>
                    )
}

export default ProductCard

const styles = StyleSheet.create({
    mainConatiner:{
       

    },
    cardConatiner: {
        borderWidth: 1,
        borderColor: "lightgray",
        marginVertical: 5,
        marginHorizontal: 8,
        width: '48%',
        padding: 10,
        backgroundColor: "#ffffff",
        justifyContent:'center',
        borderRadius: 5,

    },
    imgeUri: {
        height: 100,
        width: '100%',
        objectFit: 'contain'
    },
    ProductName: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 5
    },
    ProductDesc: {
        fontSize: 12,
        // textAlign:"center"
    },
    BtnGroup: {
        display: "flex",
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:8
    },
    btn:{
        backgroundColor:"#80B3FF",
        color: "white",
        padding:6,
        fontSize:10,
        borderRadius:4
    },
    btnText: {
        color: "#ffffff",
        textAlign: "center",
        fontSize: 10,
        fontWeight: "bold",
      },
   
})
