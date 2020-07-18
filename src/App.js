import React,{ useState } from 'react';
import './App.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Video from './Video'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [passToChild, setPassToChild] = useState('')

  const onSubmit = (event) => {
  	event.preventDefault();
  	setPassToChild(searchTerm);
  }
 
  return (
  	<div className="app">
	  	<Container>
		  <Form onSubmit={event => onSubmit(event)}>
		  <br />
	  		<Form.Row>
			    <Col>
		    	  <Form.Control 
		    	  size="lg" 
		    	  type="text" 
		    	  placeholder="Search"
		    	  onChange={event => setSearchTerm(event.target.value)} 
		    	/>
			    </Col>
			    <Col>
			      <Button 
			      variant='primary' 
			      size='lg'
			      onClick={event => onSubmit(event)}
			      >
			      	Search
			      </Button>
			    </Col>
		  	</Form.Row>
		  </Form>
		  <Row>
		  	<Video searchString={passToChild}/>
		  </Row>
		</Container>
	</div>
  );
}

export default App;
