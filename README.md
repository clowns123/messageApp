# 1. 사용한 라이브러리
- frontend
	- react, react-dom
		- 기본 리액트
	- typescript @types/react @types/react-dom
		- 타입스크립트 설정
	- eslint
		- 코드 점검 도구로 prettier에과같이 사용
	- prettier eslint-plugin-prettier eslint-config-prettier
		- 코드 문법을 예쁘게 만들어주는 라이브러리
	- webpack @types/webpack @types/node
		- 웹팩 설정으로 ts, css, json 등 최신 문법 js를 하나로 합칩
	- dotenv
	- cross-env 
	  - 웹팩 명령어를 윈도우 리눅스 둘 다 사용 가능하게
	- axios
	  - 백엔드 비동기 통신
	- react-query
		- 백엔드 비동기 통신
	- dotenv-webpack
		- 웹팩 dotenv 사용
- backend
	- express
		- 서버 프레임워크
	- cors
		cors 막는 라이브러리
	- dotenv
	- mongoose
		- 서버와 몽고디비 연결
	- googleapis
		- 구글 토큰 검증
	- mongoose-sequence
	  - 몽고디비 자동 번호 증가

# 2. 폴더 구조
- frontend
	- hooks : 비즈니스 로직
	
	- components : 각종 컴포넌트들
	
	- layouts : 공통 레이아웃
	
	- pages : 서비스 페이지
	
	- utils : 각종 라이브러리
	
	- typings : 타입스크립트의 타입
	
	  