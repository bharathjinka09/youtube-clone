import React from 'react';
import './App.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Video from './Video'

function App() {
  return (
  	<div className="app">
	  	<Container>
		  <Form>
		  <br />
	  		<Form.Row>
			    <Col>
		    	  <Form.Control size="lg" type="text" placeholder="Search" />
			    </Col>
			    <Col>
			      <Button variant='primary' size='lg'>
			      	Search
			      </Button>
			    </Col>
		  	</Form.Row>
		  </Form>
		  <Row>
		  	<Video />
		  </Row>
		</Container>
	</div>
  );
}

export default App;
