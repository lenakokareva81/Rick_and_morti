import Card from 'react-bootstrap/Card'

export function CardEpisode({ name, airdate, episode }) {

    return (
        <Card style={{ width: '28rem' }}
        >
            <Card.Body>
                <Card.Title> {name}</Card.Title>

                <Card.Subtitle className="mb-2 text-muted">
                    выход в эфир : {airdate}
                </Card.Subtitle>
                <Card.Text> эпизод : {episode}</Card.Text>

            </Card.Body>
        </Card>

    )
}