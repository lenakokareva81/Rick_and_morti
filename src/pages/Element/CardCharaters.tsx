import Card from 'react-bootstrap/Card'
import { Icharacter } from '../../types/IElement'
interface IelementProps {
    element: Icharacter
}


export function CardCharaters({ element }:IelementProps) {
const {gender, name, species, status, url}=element

    const GENDER = gender === "Male" ? "мужской" : gender === "Female" ? "женский" : "не указано"
    return (
        <Card style={{ width: '28rem' }}
        >
            <Card.Body>
                <Card.Title> {name}</Card.Title>
                <Card.Img
                    variant="top"
                    src={url}
                    alt="Card image cap"
                />
                <Card.Subtitle className="mb-2 text-muted">
                    разновидность : {species}
                </Card.Subtitle>
                <Card.Text> пол : {GENDER}</Card.Text>
                <Card.Text> статус : {status}</Card.Text>
                <Card.Link href="#"></Card.Link>
            </Card.Body>
        </Card>

    )
}