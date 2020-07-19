import React, { useState, useEffect } from 'react'
import { Col, ListGroup } from 'react-bootstrap'
import SingleVideo from './SingleVideo'
import Suggestions from './Suggestions'
import YouTube from 'simple-youtube-api'
import config from './config'

const youtube = new YouTube(config.apiKey)

export default ({ searchString }) => {

	const [videoList, setVideoList] = useState([])
	const [selectedVideo, setSelectedVideo] = useState({})


	useEffect(() => {
		callApi();
	},[searchString])

	const callApi = async () => {
			const result = await youtube.searchVideos(searchString,10)
			console.log(result);
			setSelectedVideo(result[0])
			setVideoList(result)
	}

	const selectedVideoCallback = (videoDetail) => {
		setSelectedVideo(videoDetail)
	}

	return (
		<>
			<Col xs={12} lg={8}>
		  	<br />

				<SingleVideo detail={selectedVideo} />
			</Col>
	    	<Col xs={12} lg={4}>
	    		<ListGroup>
	    			<Suggestions videoList={videoList} changeSelection={selectedVideoCallback} />
	    		</ListGroup>
	    	</Col>
		</>
	)
}

