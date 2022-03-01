import axios from "axios";

export default axios.create({
    baseURL : 'https://api.yelp.com/v3/businesses' , 
    headers : {
        Authorization : 'Bearer e0TTsb_4cqS1IjhodKrypjsc7dZgi4udZtS3qkJ4YHT_3c7ZPhBJzEVSO00M9afTUR9JhDyRmzs30wQmwPzkCpTThxz6cMGP6PgjVcs4eWhpzR_kPoUc6MDFaDQbYnYx'
    }
});