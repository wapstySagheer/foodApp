import { View, Text } from 'react-native'
import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from '@react-navigation/native'
import SearchScreen from '../Screens/SearchScreen'
import SearchDetails from '../Screens/SearchDetails'
import ResultShowScreen from '../Screens/ResultShowScreen'

const routes = () => {
    const Stack = createNativeStackNavigator();
    const titleHeader = <Text>Business Search</Text>;  
  return (
     <NavigationContainer>
         <Stack.Navigator initialRouteName='Search'>
             <Stack.Screen name='Search' component={SearchScreen} 
                options={{title : "Business Search"}}
             />
             <Stack.Screen name="Details" component={SearchDetails}/>
             <Stack.Screen name="ProductDetail" component={ResultShowScreen}/>
         </Stack.Navigator>
     </NavigationContainer>
  )
}

export default routes