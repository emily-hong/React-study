import React, { useEffect, useState } from 'react';
import Header from '../components/commons/Header';
import Home from '../components/home/Home';
import Footer from '../components/commons/Footer';

const HomePage = (props) => {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    // 디비에서 데이터 받아오는 비동기 통신...데이터 받았다치고
    let datas = [
      {id : 1, title: "첫번째 글", content: "첫번째 내용"},
      {id : 2, title: "두번째 글", content: "두번째 내용"},
      {id : 3, title: "세번째 글", content: "세번째 내용"},
    ]
    setBoards(datas);
  }, [])

  // console.log(boards);
  /*
    1. 클라이언트가 서버에 비동기요청함
      이때 IOBlocking이 일어남
    2. 서버측에 데이터를 요청했지만 서버로부터 아직 데이터를 받지는 못한 상태에서.. setBoards() 실행됨
      이때 인자값 datas에는 []가 들어있다.
    3. <Home boards={boards}> 이 부분에서 빈 데이터가 넘어간다
    4. 서버에서 데이터가 넘어오면... useEffect가 호출되어서 {boards}에 데이터가 넘겨진다.. 상태값이 변경..렌더링!!
   */
  
  return (
    <div>
      <Header/>
      <Home boards={boards} setBoards={setBoards}/>
      <Footer/>
    </div>
  );
};

export default HomePage;