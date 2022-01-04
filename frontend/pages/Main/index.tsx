import { onLogout } from '@utils/logout';
import React from 'react';

const Main = () => {
	return (
		<div>
			메인페이지입니다.
			<button onClick={onLogout}>로그아웃</button>
		</div>
	);
};

export default Main;