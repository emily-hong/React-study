import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';

// Styled component ... html custom tag만으로도 css효과를 바로 연결
// Styled component 변수명은 반드시 대문자로 시작해야한다
const StyledLogin = styled.div`
  color: cadetblue;
  padding: 30px 0 30px 0;
`

const Login = () => {
  const param = useParams(); //페이지 Link로 이동할때 주소창 값 전달받기
  const location = useLocation(); //Link를 통해서 데이터를 통으로 받아올때 사용
  const user = location.state.user;
  console.log("user", user.id);
  
  
  return (
    <div>
      <StyledLogin>
        <h1>로그인 페이지 입니다.</h1>
        <h3>User ID : {param.id}</h3>
        <h3>User : {user.name}, {user.pwd}, {user.id}</h3>
      </StyledLogin>
    </div>
  );
};

export default Login;