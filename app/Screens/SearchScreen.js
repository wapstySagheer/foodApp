import { Dimensions, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, {useState } from 'react'
import SearchBar from '../components/SearchBar'
import useCustom from '../hooks/useCustom'
import ListResults from '../components/ListResults'
const SearchScreen = ({navigation}) => {
  console.log(navigation)
  // const [state , dispatch ] = useReducer(reducer , {searchInput : 'sagheer'});
  const [term , setInput] = useState('');
  const itemsCategoryListShowingClearly = [{}];
  const [yelpSerachApi , results , errorMessage] = useCustom();
  const filterResultsByPrice = (price) =>{
      return results.filter(result => {
        return result.price === price;
      })
  }

  const filterResultByRating = (rating) =>{
    return results.filter(result => {
        return result.rating >= rating;
    })
  }
  
  return (
    <View style={{backgroundColor : 'white' , flex:1}}>
      {/* <Text>SearchScreen</Text> */}
      <SearchBar 
       requestInput={term}
       setRequestInput={(text)=>setInput(text)}
       onTermSubmit={()=> yelpSerachApi(term)}
       />

       { errorMessage ? <Text>{errorMessage}</Text> : null}
       
       <ScrollView>
          <ListResults title='Cost Effective'  navigation={navigation} rating={filterResultByRating(4.5)} results={filterResultsByPrice('$')}/>
          <ListResults title='Bit pricer'  navigation={navigation} rating={filterResultByRating(3.5)} results={filterResultsByPrice('$$')}/>
          <ListResults title='Big Spender'  navigation={navigation} rating={filterResultByRating(4)} results={filterResultsByPrice('$$$')}/>
          <ListResults title='Big Spender'  navigation={navigation} rating={filterResultByRating(4)} results={filterResultsByPrice('$$')}/>
          <ListResults title='Big Spender'  navigation={navigation} rating={filterResultByRating(4)} results={filterResultsByPrice('$$')}/>
        </ScrollView>
          
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  listDetails : {
    marginBottom : 100
  }
})