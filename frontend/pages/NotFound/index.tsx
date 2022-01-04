import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div>
			존재하지 않는 페이지입니다. <br />
			<Link to="/">메인 페이지로 이동</Link>
		</div>
	);
};

export default NotFound;