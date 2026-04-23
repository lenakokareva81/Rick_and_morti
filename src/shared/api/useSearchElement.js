import { useEffect, useState } from "react"
import axios from 'axios'

export function useSearchElement(id, categoryname) {

const [loading, setLoading]=useState(true)
const [error,setError]=useState(false)
const [element, setElement]=useState([])

console.log('categoryname',categoryname)

    useEffect(()=>{
        setLoading(true);
        setError(false);
        
      let cancel;
         axios({
             method:'GET',
             url:`https://rickandmortyapi.com/api/${categoryname}`,
             cancelToken: new axios.CancelToken((c)=>cancel=c),
             
        }).then((res)=>{
           console.log('element-res',res.data.results.filter(item=>item.id==id))
            setElement(res.data.results.filter(item=>item.id==id)[0])
            setLoading(false)
                   
            setError(false)
            console.error(error)
        })

        return ()=>cancel()

},[categoryname,id])

console.log('element',element)
    return {
loading,
error,
element,

    }
}