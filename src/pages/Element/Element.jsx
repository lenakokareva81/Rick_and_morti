import { useParams } from "react-router-dom"


import { CardCharaters } from "./CardCharaters";
import { CATEGORY } from "../../constants";
import { CardEpisode } from "./CardEpisode";
import { CardLocation } from "./CardLocation";
import { useSearchElement } from "../../hooks";


export function Element() {
    const { id, categoryname } = useParams()


    const { loading,
        error,
        element
    } = useSearchElement(id, categoryname)

    console.log('element', element)
    console.log('loading', loading)


    return (
        <>
            {element.length != 0 &&
                <div className="d-flex justify-content-center align-items-center p-2">
                    {categoryname === CATEGORY.CHARACTERS ?
                        <CardCharaters
                            gender={element.gender}
                            name={element.name}
                            species={element.species}
                            status={element.status}
                            imgUrl={element.image}
                        /> : ''}
                    {categoryname === CATEGORY.EPISODE ?
                        <CardEpisode
                            name={element.name}
                            airdate={element.air_date}
                            episode={element.episode}
                        /> : ''}
                    {categoryname === CATEGORY.LOCATION ?
                        <CardLocation
                            name={element.name}
                            type={element.type}
                            dimension={element.dimension}

                        /> : ''}
                </div>
            }


            {loading && <>loading....</>}
            {error && <>error</>}


        </>
    )
} 