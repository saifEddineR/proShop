import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import FormContainer from '../Components/FormContainer';
import { saveShippingAddress } from '../actions/cartActions';
import CheckoutSteps from '../Components/CheckoutSteps';

const ShippingScreen = ({ history }) => {
  const { shippingAddress } = useSelector((state) => state.cart);
  const [address, setAddress] = useState(shippingAddress.address);
  const [city, setCity] = useState(shippingAddress.city);
  const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
  const [country, setCountry] = useState(shippingAddress.country);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, city, postalCode, country }));
    history.push('/payment');
  };
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <Form.Group controlId='adress'>
          <Form.Label>address</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter a address'
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='city'>
          <Form.Label>city</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter a city'
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='postal code'>
          <Form.Label>postal code</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter a postal code'
            value={postalCode}
            required
            onChange={(e) => setPostalCode(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId='Country'>
          <Form.Label>Country</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter a Country'
            value={country}
            required
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button type='submit' className='btn-dark' variant='primary'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
};

export default ShippingScreen;
