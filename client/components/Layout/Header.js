import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native'
import FontAwesome from "react-native-vector-icons/FontAwesome";
import React, { useState } from 'react'

const Header = () => {
    const [searchText,setSearchText] = useState("")
    const handleSearch =()=>{
        console.log(searchText);
        setSearchText("")
    }
    return (
        <View style={
            styles.firstConatiner
        }>
            <View style={styles.conatainer}>
                <TextInput style={styles.inputField}
                placeholder='Search'
                value={searchText}
                onChangeText={(text)=>setSearchText(text)}
                />
                <TouchableOpacity
                onPress={handleSearch}
                style={styles.searchIcon}
                >
                    <FontAwesome name="search"
                    style={styles.Icon}
                        size={20}
                        color="#900"/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    firstConatiner: {
        height: 90,
        backgroundColor:'#6499E9',
    },
    conatainer: {
        display: 'flex',
        marginTop:20,
        flex: 1,
        flexDirection: 'row',
        paddingHorizontal: 15
    },
    inputField:{
        borderWidth: 0.3,
        width: "100%",
        position: "absolute",
        left: 15,
        height: 40,
        color: "#000000",
        backgroundColor: "#ffffff",
        paddingLeft: 10,
        fontSize: 16,
        borderRadius: 5,
    },
    searchIcon:{
        position: "absolute",
        left: "95%",
        top:"10%"
    },
    Icon:{
        color: "#000000",
    fontSize: 18,
    }
})
