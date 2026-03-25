import Card from 'react-bootstrap/Card'

export function CardLocation({ name, type, dimension }) {

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