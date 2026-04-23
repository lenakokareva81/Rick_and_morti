import { useEffect, useState } from "react"
import axios from 'axios'
import { Icharacter, Iepisode, Ilocation } from "../types/IElement"
interface IelementProps {
    element: Iepisode | Ilocation | Icharacter 
}


export function useSearchElement(id: number, categoryname: string) {

    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<boolean>(false)
    const [element, setElement] = useState<IelementProps|[]>([])

    console.log('categoryname', categoryname)

    useEffect(() => {
        setLoading(true);
        setError(false);

        let cancel;
        axios({
            method: 'GET',
            url: `https://rickandmortyapi.com/api/${categoryname}`,
            cancelToken: new axios.CancelToken((c) => cancel = c),

        }).then((res) => {
            const elements: [IelementProps] =res.data.results
            const newElement: IelementProps =  elements.filter(item => item.id == id)[0]
            console.log('element-res', res.data.results.filter(item => item.id == id))
            setElement(newElement)
            setLoading(false)

            setError(false)
            console.error(error)
        })

        return () => cancel()

    }, [categoryname, id])

    console.log('element', element)
    return {
        loading,
        error,
        element,

    }
}