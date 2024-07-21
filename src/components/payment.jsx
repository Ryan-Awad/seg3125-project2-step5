import React, { Component } from 'react';
import { Form, Button, Container, Row, Col, ListGroup } from 'react-bootstrap';
import '../styles/payment.css';

class Payment extends Component {
  state = {
    total: 0.00,
    cartItems: []
  };

  componentDidMount() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let total = 0.00;
    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price * cart[i].quantity
    }
    total = Math.round(total * 100) / 100;
    this.setState({cartItems: cart, total: total});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert('Order placed!');
  };

 
  render() {
    return (
      <Container style={{padding: '50px'}}>
        <Row>
          <Col md={6}>
            <h2 className="mb-4">Your Cart</h2>
            <ListGroup>
              {this.state.cartItems.map(item => (
                <ListGroup.Item
                  style={{backgroundColor: '#a7aaa4', borderColor: '#9899a6'}}
                  key={item.id} 
                  aria-label={item.name + " with quantity " + item.quantity + " each with a price of " + item.price}
                >
                  {item.name} x {item.quantity} - ${item.price}
                </ListGroup.Item>
              ))}
            </ListGroup><br />
            <h4>Total: ${this.state.total}</h4>
          </Col>
          <Col md={6}>
            <h2 className="mb-4">Payment Information</h2>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Cardholder name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  aria-label="Cardholder name"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formCardNumber">
                <Form.Label>Card Number</Form.Label>
                <Form.Control
                  type="text"
                  name="cardNumber"
                  onChange={this.handleChange}
                  placeholder="1111 2222 3333 4444"
                  aria-label="Card number"
                  required
                />
              </Form.Group>
              <Row>
                <Col>
                  <Form.Group controlId="formExpiryDate">
                    <Form.Label>Expiry Date</Form.Label>
                    <Form.Control
                      type="text"
                      value={this.state.expiryDate}
                      placeholder="MM/YY"
                      aria-label="Expiry date"
                      required
                    />
                  </Form.Group>
                </Col>

                <Col>
                  <Form.Group controlId="formCVV">
                    <Form.Label>CVV</Form.Label>
                    <Form.Control
                      type="text"
                      name="cvv"
                      placeholder="Enter your CVV"
                      aria-label="CVV"
                      required
                    />
                  </Form.Group>
                </Col>
              </Row><br></br>

              <Button variant="primary" type="submit" aria-label="Place order">
                Place order
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Payment;
