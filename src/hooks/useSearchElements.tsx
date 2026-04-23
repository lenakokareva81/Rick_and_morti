import { useEffect, useState } from "react"
import axios from 'axios'

export function useSearchElements(categoryname:string,pageNumber:number) {

const [loading, setLoading]=useState(true)
const [error,setError]=useState(false)
const [elements, setElements]=useState([])
const [hasMore, setHasMore]=useState(false)

useEffect(()=>setElements([]),[categoryname])


    useEffect(()=>{
        setLoading(true);
        setError(false);
      let cancel;
         axios({
             method:'GET',
             url:`https://rickandmortyapi.com/api/${categoryname}?page=${pageNumber}`,
             cancelToken: new axios.CancelToken((c)=>cancel=c),
             params:{p:pageNumber},
        }).then((res)=>{
            setElements(prevState=>{
                
                return [...new Set([...prevState,...res.data.results])]
            })
            setLoading(false)
           
          setHasMore(res.data.info.next===null)
        }).catch(e=>{
            if (axios.isCancel(e)){
                return;
            }
            setError(false)
            console.error(e)
        })



        return ()=>cancel()

},[categoryname,pageNumber])

    return {
loading,
error,
elements,
hasMore

    }
}