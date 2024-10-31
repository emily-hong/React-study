import React from 'react';
import Footer from '../components/commons/Footer';

const WritePage = () => {

  const handleWrite = () => {
    // 게시글 하나가 생성..
    let board = {id: 6, title: '폼 입력값'}
  }

  return (
    <div>
      <h1 style={{}}>WritePage.....</h1>
      <form action="">
        <input type="text" placeholder='제목을 입력...' />
        <button type='button' onClick={handleWrite}>글쓰기</button>
      </form>
      <Footer/>
    </div>
  );
};

export default WritePage;