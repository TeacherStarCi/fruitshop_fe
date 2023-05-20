
import {Button, Card} from 'react-bootstrap'
export const FruitCard = (props) => {
    

  return (
    <div className = 'FruitCard'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
        Price: {props.price} <br/>
        Quantity: {props.quantity}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    </div>
  );
}

export default FruitCard;