import { useParams } from "react-router-dom"


import { CardCharaters } from "./CardCharaters";
import { CATEGORY } from "../../constants";
import { CardEpisode } from "./CardEpisode";
import { CardLocation } from "./CardLocation";
import { useSearchElement } from "../../hooks";
import { Iepisode, Ilocation, Icharacter } from "../../types/IElement";


interface searchElement {
    loading: boolean,
    error: boolean,
    element: Iepisode | Ilocation | Icharacter
}

export function Element() {
    const { id, categoryname } = useParams()


    const { loading,
        error,
        element
    }: searchElement = useSearchElement(id, categoryname)




    return (
        <>
            {element.length != [] &&
                <div className="d-flex justify-content-center align-items-center p-2">
                    {categoryname === CATEGORY.CHARACTERS ?
                        <CardCharaters
                            element={element}
                        // gender={element.gender}
                        // name={element.name}
                        // species={element.species}
                        // status={element.status}
                        // imgUrl={element.image}
                        /> : ''}
                    {categoryname === CATEGORY.EPISODE ?
                        <CardEpisode
                            element={element}
                        /> : ''}
                    {categoryname === CATEGORY.LOCATION ?
                        <CardLocation
                            element={element}


                        /> : ''}
                </div>
            }


            {loading && <>loading....</>}
            {error && <>error</>}


        </>
    )
} 