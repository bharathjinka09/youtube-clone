import React from 'react'
import { ListGroup } from 'react-bootstrap'


export default ({videoList}) => {

	const changeSelectedVideo = () => {

	}

	return (
		<div>
			{videoList.length > 0 ? 
				videoList.map(data => <p>{data.title}</p>) : 'No videos'
			}
		</div>
	)
}

