import React from 'react';
import { Card } from 'react-bootstrap';

function Side() {
    return (
        <Card
            bg="light"
            text="dark" 
            className="mt-3" >
            <Card.Header>Header</Card.Header>
            <Card.Body>
                <Card.Title>Light Card Title </Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default Side;