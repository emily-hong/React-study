import React, { useState } from 'react';
import './App.css';

// 서버에서 받아온 데이터...비동기 통신
// let location = "인도";
function location() {
  return "인도";
}
const styles = {color:'crimson', fontSize:'30px'};

function App() {
  //여행지가 변경되면 그때마다 화면의 내용이 변경... 상태값으로 처리해야한다...useState()
  let locations = ["인도", "라오스", "마다가스카르", "스페인", "하와이"]
  let [loc, setLoc] = useState(['Best Like Trip ~~', locations]);

    // 각 여행지별 좋아요 수를 관리하는 상태 배열
    const [likes, setLikes] = useState(Array(locations.length).fill(0));

    // 특정 여행지의 좋아요 수 증가 함수
    const likeHandler = (index) => {
      const newLikes = [...likes];
      newLikes[index] += 1; // 해당 index의 좋아요 수만 증가
      setLikes(newLikes);
    };
  
  return (
    <div className="App">
      <div className='nav'>
        태어난 김에 세계일주
      </div>
      {/* html...getElementById("h3").innerHTML = location; */}
      {/* <h3 style={styles}>{location()}여행 Blog 작성</h3> */}
      {
        locations.map((location, index) => {
          return (
            <div className='list' key={index}>
              <h3>{location} <span onClick={() => 
                likeHandler(index)
              }>
              👍</span></h3>
              <p>{loc[0]} {likes[index]}</p><hr/>
          </div>
          )
        })
      }
    </div>
  );
}

export default App;
