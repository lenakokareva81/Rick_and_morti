import { useState, useRef, useCallback, lazy } from "react";
import { Link, useParams } from "react-router-dom"
import ListGroup from 'react-bootstrap/ListGroup'
import { ListGroupItem } from "./ListGroup";
import { useSearchElements } from "../../hooks";
import { Form, Button } from 'react-bootstrap'

// const useSearchElements =lazy(()=>import('../../hooks')) 

export default function Category() {
    const { categoryname } = useParams()
    const [pageNumber, setPageNumber] = useState(1)

    const { loading,
        error,
        elements,
        hasMore } = useSearchElements(categoryname, pageNumber)


    const observer = useRef();
    const lastNodeRef = useCallback((node) => {
        if (loading) return;
        if (observer.current) {
            observer.current.disconnect();
        }
        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !hasMore) {
                setPageNumber(prevState => prevState + 1)
            }
        }
        )

        if (node) {
            observer.current.observe(node)
        }


    }, [loading, hasMore])


    return (
        <>


            <ListGroup>
                {elements.map((item, index) => {
                    if (elements.length - 10 === index + 1) {
                        return (<>
                            <ListGroup.Item ref={lastNodeRef} key={index}>
                                <ListGroupItem
                                    categoryname={categoryname}
                                    id={item.id}
                                    name={item.name} />
                            </ListGroup.Item>
                        </>)
                    } else {
                        return (<>
                            <ListGroup.Item key={index}>
                                <ListGroupItem
                                    categoryname={categoryname}
                                    id={item.id}
                                    name={item.name} />
                            </ListGroup.Item>
                        </>)

                    }


                })
                }

            </ListGroup >

            {loading && <>loading....</>}
            {error && <>error</>}
        </>
    )
}