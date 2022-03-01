import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import yelp from '../api/yelp';
import { useSerachYelpId } from '../hooks/useCustom'; 

const ResultShowScreen = ({route}) => {
    const {id} = route.params;
    const [yelpSearchId , result] = useSerachYelpId();
    

    useEffect(()=>{
        yelpSearchId(id);
    },[])

  return (
    <View>
      <Text>ResultShowScreen</Text>
      {/* <Text>{navigation.getParam('id')}</Text> */}
      <Text style={styles.name}>{result.name}</Text>
      <FlatList
      horizontal
        data={result.photos}
        renderItem={({item})=>{
            return <View style={styles.container}>
                        <Image style={styles.image} source={{uri : item}}/>
                    </View>
        }}
      />
      <View style={styles.index}>
        <Text style={styles.title}>Rating : {result.rating}</Text>
        <Text style={styles.title}>Reviews : {result.review_count}</Text>
      </View>
    </View>
  )
}

export default ResultShowScreen

const styles = StyleSheet.create({
    container : {
        alignItems : 'center',
        marginTop : 20,
        marginHorizontal : 15
        // flex : 1
    },
    image : {
        width : 350 , 
        height : 200,
        margin:5
    },
    name : {
        fontSize : 20,
        fontWeight : 'bold',
        marginTop : 10,
        textAlign : 'center',
        color: 'orange'
    },
    title: {
        textAlign : 'center',
        fontSize : 20, 
        fontWeight : 'bold',
        color : 'black'
    }
    // index : {
    //     flexDirection : 'row' , 
    //     justifyContent : 'center',
    //     margin : 10
    // }
})