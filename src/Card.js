import React from 'react';

const Card = ({id, name, email}) => {
	return (
		<div className="tc bg-light-green dib br3 pa3 ma2 bw2 shadow-5 grow">
			<img alt='robofriends' src={`https://robohash.org/${id}?200x200`}/>
			<h2>{name}</h2>
			<p>{email}</p>
		</div>
	)
}

export default Card;