import Card from 'react-bootstrap/Card'
import {  Ilocation } from '../../types/IElement'
interface IelementProps {
    element: Ilocation
}
export function CardLocation({ element }: IelementProps) {
    const { name, type, dimension } = element
    return (
        <Card style={{ width: '28rem' }}
        >
            <Card.Body>
                <Card.Title> {name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                    тип : {type}
                </Card.Subtitle>
                <Card.Text> размер : {dimension}</Card.Text>

            </Card.Body>
        </Card>

    )
}