import { StyleSheet, Text, TextInput, View, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto'
const SearchBar = ({requestInput  , setRequestInput, onTermSubmit }) => {
    // console.log(requestInput);
    // console.log(change);
    // alert(change)
  return (
    <View style={styles.searchBarContainer}>
      {/* <Text>SearchBar</Text> */}
      <Fontisto name="search" style={styles.icon} size={35}/>
      {/* <Icon name/> */}
      <TextInput style={styles.input} 
      autoCapitalize="none"
      autoCorrect={false}
      value={requestInput} 
      onChangeText={setRequestInput}
      onEndEditing={onTermSubmit} 
      placeholder="Search" />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    searchBarContainer : {
        backgroundColor : 'rgb(240 , 238 , 238)',
        height : 50,
        borderRadius : 7,
        marginHorizontal : 15,
        marginVertical : 20,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'flex-start',
        paddingHorizontal : 10
    },
    input : {
        paddingLeft : 4,
        marginLeft: 10,
        fontSize : 18,
        fontWeight : 'bold',
        color : 'orange',
        flex : 1,
        // borderColor : 'black',
        // borderWidth : 1
        // backgroundColor : 'red'
    },
    icon : {
        color: "black",
        fontWeight : 'bold'
    }
})