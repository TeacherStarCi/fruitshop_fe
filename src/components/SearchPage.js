import axios from "axios";
import {useEffect, useState} from 'react'
import {Row, Col, Button, Modal} from 'react-bootstrap'
import FruitCard from "./FruitCard";

const SearchPage = () => {
   
  const [showModal, setShowModal] = useState(false);

    const handleClose = () => {
      setShowModal(false);
    };
    
    const handleShow = () => {
      setShowModal(true);
    };

  const [data, setData] = useState([]);
 
  const getData = async () => {
    const response = await axios.get("http://localhost:3001/fruit");
    setData(response.data)
  }

  // react hook, useEffect
  useEffect(() => {
    // Đây là side effect sẽ được thực hiện trong lần render đầu tiên
    getData()
  }, []);


  return (<div className="SearchPage">
   
      <h1>Search</h1>
      <Button variant="primary" onClick={handleShow}>
  Create Fruit
</Button>
      <Row> 
      {data.map((item) => (
        <Col lg = {3}> 
        <FruitCard name = {item.name} price = {item.price} quantity = {item.quantity} image = {item.image}/>
        </Col>
      ))}
    </Row>

    
    <Modal show={showModal} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Modal heading</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <p>Modal body text goes here.</p>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
      Close
    </Button>
    <Button variant="primary" onClick={handleClose}>
      Save Changes
    </Button>
  </Modal.Footer>
</Modal>
    </div>)
}


export default SearchPage