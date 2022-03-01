import { useEffect , useState } from "react";
import yelp from "../api/yelp";

export default useResults = () => {
    const [results , setResults] = useState([]);
    const [errorMessage , setErrorMessage] = useState('');

const yelpSerachApi = async (input) =>{
    try {
        const response = await yelp.get('/search' , {
            params : {
                limit : 30 , 
                term : input ,
                location : 'san jose'
            }
        });
        setResults(response.data.businesses);
    
        return [yelpSerachApi , results , errorMessage ];

    } catch (error) {
        setErrorMessage('SomeThing went wrong!!!');
    }
}

useEffect(()=>{
    yelpSerachApi('pasta');
},[])

}