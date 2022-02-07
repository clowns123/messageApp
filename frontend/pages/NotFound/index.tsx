import { loginState } from '@atoms/loginState';
import React from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';

const NotFound = () => {
	const [isLogin, _] = useRecoilState(loginState);
	return (
		<div>
			존재하지 않는 페이지입니다. <br />
			<Link to={isLogin ? "workspace" : "/" }>메인 페이지로 이동</Link>
		</div>
	);
};

export default NotFound;