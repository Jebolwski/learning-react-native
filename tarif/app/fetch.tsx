import { useEffect, useState } from "react";
import axios from 'axios';


export default function useFetch(url:string) {

    
    const [data,setData] = useState();
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);
    const fetchData = async () =>{
        try{
            const {data:responseData} = await axios.get(url);
            setData(responseData);
            setLoading(false);
            
            return {data:responseData, loading: loading, error: error};
        } catch(err:any){
            setError(err.message);
            setLoading(false);
        }
    }

    useEffect(()=>{
        fetchData();
    },[]);
    
    return {data:data, loading: loading, error: error};

}