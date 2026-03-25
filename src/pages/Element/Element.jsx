import { useParams } from "react-router-dom"

import { useEffect, useState } from "react";
import { CardCharaters } from "./CardCharaters";
import { CATEGORY } from "../../constants";
import { CardEpisode } from "./CardEpisode";
import { CardLocation } from "./CardLocation";

export function Element() {
    const { id, categoryname } = useParams()

    const [element, setElement] = useState(null);

    const PATH = `/${categoryname}.json`


    useEffect(() => {
        fetch(PATH)
            .then(response => response.json())
            .then(data => {
                const foundElement = data.find(e => e.id === Number(id));
                setElement(foundElement)
            }).catch(error => console.error('Error fetching data:', error));
    }, [categoryname]);

    if (!element) {
        return <div>Loading...</div>;
    }



    return (
        <>
            <div className="d-flex justify-content-center align-items-center p-2">
                {categoryname === CATEGORY.CHARACTERS ?
                    <CardCharaters
                        gender={element.gender}
                        name={element.name}
                        species={element.species}
                        status={element.status}
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




        </>
    )
}