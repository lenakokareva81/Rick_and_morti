import { useState } from "react";

import { Link } from "react-router-dom";


export function ListGroupItem({ categoryname, id, name }) {
    const [isHovered, setIsHovered] = useState(false);

    return (

        <Link
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}

            to={`/category/${categoryname}/${id}`}
            style={{
                textDecoration: 'none',
                // сolor: isHovered ? 'grey' : 'white',
                color: isHovered ? 'blue' : 'grey',
            }}
        >
            {name}
        </Link >

    )
}