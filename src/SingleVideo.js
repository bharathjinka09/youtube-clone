import React from 'react'


export default ({detail}) => {

	return (
			<div>
				{detail && (
				<div>
					<iframe 
					width="100%" 
					height="500"
					title={`${detail.id}`} 
					src={`https://www.youtube.com/embed/${detail.id}`} 
					frameBorder="0" 
					allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
					allowFullScreen>
					</iframe>
					<h3>{detail.title}</h3>
					<p>{detail.description}</p>
				</div>
			)}
			</div>
	);
};

