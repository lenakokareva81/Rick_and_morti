import Card from 'react-bootstrap/Card'

export function CardCharaters({ gender, name, species, status, imgUrl }) {
    const GENDER = gender === "Male" ? "мужской" : gender === "Female" ? "женский" : "не указано"
    return (
        <Card style={{ width: '28rem' }}
        >
            <Card.Body>
                <Card.Title> {name}</Card.Title>
                <Card.Img
                    variant="top"
                    src={imgUrl}
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