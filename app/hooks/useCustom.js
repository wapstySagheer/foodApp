import {useState , useEffect} from 'react'
import yelp from '../api/yelp'

export default ()=> {
    const [results , setResult] = useState([]);
    const [errorMessage , setErrorMessage] = useState('');

  const yelpSerachApi = async (searchTerm) => {
    console.log("hello")
    try {
      const response = await yelp.get('/search' , {
        params : {
          limit : 50 , 
          term : searchTerm,
          location : 'sane jose'
        }
      });
      setResult(response.data.businesses);
    } catch (error) {
      setErrorMessage('Something went wrong!!!');
    }
  }

  useEffect(()=>{
    yelpSerachApi('pizza')
  },[])

  return [yelpSerachApi , results , errorMessage];
}

export function useSerachYelpId(){

    const [result , setResult] = useState({});

    const yelpSearchId = async (id)=> {
        const response = await yelp.get(id);
        setResult(response.data);
    }
    
    // useEffect(()=>{
    //     yelpSearchId(id)
    // })

    return [yelpSearchId , result];
}

// export {yelpSearchId};