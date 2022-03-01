import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {withNavigation} from ' '
const ResultsDetails = ({results , navigation}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={()=> navigation.navigate( 'ProductDetail',  {id : results.id})}>
      <Image style={styles.imageStyle} source={{uri : results.image_url}}/>   
      <Text style={styles.title}>{results.name}</Text>
      <View style={styles.titleContainer}>
      <Text style={styles.titleRemaining}>{results.rating} Rating</Text>
      <Text style={styles.titleRemaining}>{results.review_count} Reviews</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ResultsDetails

const styles = StyleSheet.create({
    container : {
         marginHorizontal : 20,
         marginBottom : 15
    },
    imageStyle : {
        width : 350, 
        height: 200 , 
        borderRadius : 4,
        marginBottom : 5
    },
    title : {
        fontSize : 15,
        fontWeight : 'bold',
        color: 'black'
    },
    titleContainer : {
        flexDirection : 'row',
        justifyContent : 'space-between'
    },
    titleRemaining : {
        fontSize : 16
    }  
})