import Card from 'react-bootstrap/Card'
import { Iepisode } from '../../types/IElement'
interface IelementProps {
    element: Iepisode 
}

export function CardEpisode({ element }:IelementProps) {
const { name, air_date, episode }=element

    return (
        <Card style={{ width: '28rem' }}
        >
            <Card.Body>
                <Card.Title> {name}</Card.Title>

                <Card.Subtitle className="mb-2 text-muted">
                    выход в эфир : {air_date}
                </Card.Subtitle>
                <Card.Text> эпизод : {episode}</Card.Text>

            </Card.Body>
        </Card>

    )
}