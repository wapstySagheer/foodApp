import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ResultsDetails from './ResultsDetails'

const ListResults = ({title , results , rating , navigation}) => {
    console.log(navigation +  " : list result")
    if(!results.length){
      return null;
    }
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(result)=>result.id}
        data={results}
        renderItem={({item})=>{
            return <ResultsDetails navigation={navigation}  results={item}/> 
        }}
      />    
    </View>
  )
}

export default ListResults;

const styles = StyleSheet.create({
    title : {
        fontSize : 20,
        fontWeight : 'bold',
        marginLeft : 20,
        marginBottom : 5,
        color : 'black'

    }
})