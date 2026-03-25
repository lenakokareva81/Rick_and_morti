import Card from 'react-bootstrap/Card'

export function CardCharaters({ gender, name, species, status }) {
    const GENDER = gender === "Male" ? "мужской" : gender === "Female" ? "женский" : "не указано"
    return (
        <Card style={{ width: '28rem' }}
        >
            <Card.Body>
                <Card.Title> {name}</Card.Title>
                <Card.Img
                    variant="top"
                    src="https://u-stena.ru/upload/resize_cache/iblock/8c2/432_450_1/8c2f36e88e65de30b8712b772cdf134a.jpg"
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