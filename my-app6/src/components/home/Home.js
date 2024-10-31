import React from 'react';

const textColor = {color: 'magenta'}

const Home = (props) => {
  const {boards, setBoards} = props; //구조분할할당
  console.log("boards : ", boards);
  
  return (
    <div>
      <h1 style={textColor}>Home Page...</h1>
      <button onClick={() => {setBoards([])}}>전체 삭제🚀🚀</button>
      {
        boards.map((item, index) => (
          <h3 key={index}>
            Title : {item.title} &nbsp;&nbsp;
            CONTENT : {item.content}
          </h3>
        ))
      }
    </div>
  );
};

export default Home;