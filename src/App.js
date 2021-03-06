import React,{ useState } from 'react';
import './App.css';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import Video from './Video'
import Footer from './Footer'

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
	  		<Form.Row className='search-box'>
			    <Col xs={12} md={2} style={{ margin:'auto' }}>
			      <img 
			        src="https://www.freeiconspng.com/uploads/youtube-logo-png-picture-2.png"
			        alt='logo'
			        width="100px"
			        style={{ margin: 'auto' }}
			      />
			    </Col>
			    <Col md={5} xs={8}>
		    	  <Form.Control 
			    	  size="lg" 
			    	  type="text" 
			    	  placeholder="Search"
			    	  onChange={event => setSearchTerm(event.target.value)} 
			    	  style={{ flex: 1 }}
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
		  <Row>
		  	<Footer />
		  </Row>
		</Container>
	</div>
  );
}

export default App;
