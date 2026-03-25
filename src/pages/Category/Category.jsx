import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import ListGroup from 'react-bootstrap/ListGroup'
import { ListGroupItem } from "./ListGroup";


export function Category() {
    const { categoryname } = useParams()
    const [data, setData] = useState(null);


    const PATH = `/${categoryname}.json`


    useEffect(() => {
        fetch(PATH)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error('Error fetching data:', error));
    }, [categoryname]);

    if (!data) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <ListGroup>
                {data.map((item, index) => (
                    <ListGroup.Item key={index}>

                        <ListGroupItem
                            categoryname={categoryname}
                            id={item.id}
                            name={item.name} />

                    </ListGroup.Item>

                ))
                }

            </ListGroup >
        </>
    )
}