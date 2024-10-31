import React from 'react';
import Header from '../components/commons/Header';
import Login from '../components/login/Login';
import Footer from '../components/commons/Footer';
import { Link, useNavigate } from 'react-router-dom';

// 페이지는 컴포넌트들의 결합이다
// 비동기 통신으로 서버에서 로그인된 모든 정보를 받아왔다치고
const users = [
  {id: "kosta", pwd: "1234", name: "홍종각"},
  {id: "spring", pwd: "4321", name: "김종각"},
  {id: "admin", pwd: "admin", name: "관리자"},

]

const LoginPage = (props) => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1); // 이전페이지로 찾아감
  }
  const goHome = () => {
    navigate("/");
  }

  return (
    <div>
      <Header id="Header입니다"/>
      <h3>Login Members</h3>
      {/* <Login id="kosta" pwd="1234"/> */}
      <ul style={{'textAlign':'center', 'color':'blue', 'fontSize':'1.4em', 'listStyle':'none'}}>
        {
          users.map((user) => (
            <li key={user.id}>
              {/* 주소창 뒤에 값이 아니라 객체 전달은? state */}
              {/* <Link to={`/login/${user.id}`} state={user}>{user.name}</Link> */}
              <span onClick={() => {
                // TODO
                // navigate(`/login/${user.id}`, {state: {user}})
              }}>{user.name}</span>
            </li>
          ))
        }
        
      </ul>
      <div>
        <button onClick={goBack}>Back</button>
        <button onClick={goHome}>Home</button>
      </div>
      <Footer/>

    </div>
  );
};

export default LoginPage;