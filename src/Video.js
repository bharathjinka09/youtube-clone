import React from 'react'
import { Col } from 'react-bootstrap'

function Video(){
	return (
		<>
			<Col xs={12} lg={8} style={{ border: "2px solid blue" }}>Single Video</Col>
	    	<Col xs={12} lg={4} style={{ border: "2px solid blue" }}>Suggestions</Col>
		</>
	)
}

export default Video