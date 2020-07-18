import React from 'react'


export default ({detail}) => {

	return (
			<div>
				{detail && (
				<div>
					<iframe 
					width="700" 
					height="500"
					title={`${detail.id}`} 
					src={`https://www.youtube.com/embed/${detail.id}`} 
					frameBorder="0" 
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
					allowFullScreen>
					</iframe>
					<h1>{detail.title}</h1>
					<h4>{detail.description}</h4>
					<h1>video details</h1>
				</div>
			)}
			</div>
	);
};

