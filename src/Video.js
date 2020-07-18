import React, { useState, useEffect } from 'react'
import { Col } from 'react-bootstrap'
import SingleVideo from './SingleVideo'
import Suggestions from './Suggestions'
import YouTube from 'simple-youtube-api'
import config from './config'

const youtube = new YouTube(config.apiKey)

function Video(){

	const [videoList, setVideoList] = useState([])


	useEffect(() => {
		callApi();
	},[])

	const callApi = async () => {
			const result = await youtube.searchVideos('traversymedia',5)
			console.log(result);
			setVideoList(result)
	};

	return (
		<>
			<Col xs={12} lg={8}>
		  <br />
			
				<SingleVideo detail={videoList[0]} />
			</Col>
	    	<Col xs={12} lg={4}>
	    		<Suggestions />
	    	</Col>
		</>
	)
}

export default Video