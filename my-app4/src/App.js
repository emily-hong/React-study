import { useEffect, useState } from 'react';
import './App.css';
import User, { id, name } from './user/User';

function App() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");

  /*
    데이터 저장법
    1. 변수저장
    2. state 사용 -> userState() 함수 사용
   */
  // const add = () => {
  //   setCount(count+1);
  //   console.log("count ---> " + count);
  // }
  
  /*
    useEffect()
    1. 화면이 첫 렌더링될때(최초의 마운트될때)
    2. 상태값이 변경될때마다 뜬다
   */
  // 3. 서버에서 클라이언틀의 요청을 수행한 후 데이터를 반환...10을 리턴
  // 2번에서는 버튼 클릭해서 상태값 count를 변경했지만 실제로는 서버에서 받은 데이터를 할당
  const ajaxData = () => {
    let serverCount = 10;
    setCount(serverCount);
  }

  // 3. useEffect(() => {}, []) []은 어떤 상태값에도 의존하지 않겠다는 의미
  useEffect(() => {
    console.log("useEffect App 실행됨...");
    ajaxData(); //화면이 먼저 랜더링된 후에 서버의 데이터를 받아온다.
  }, [search]); //seach상태값 변경에 의존하겠다

  /*
    상태값 변경될때....add() --> setCount가 호출될때
    return을 실행.. UI 엘러먼트가 있기 때문에...
  */
  return (
    <>
      {/* 증가된 조회수가 화면에 반영될려면 변수를 상태값 state로 변경!! useState() 사용 */}
      {/* <h2>조회수 : {count}</h2>
      <User />
      Member ID : {id} <br/>
      Member Name : {name}
      <br/> <b>----------------------------------------</b>
      <button onClick={add}>조회수 증가하기</button> */}

      {/* 
        버튼 누를때마다 useEffect가 실행된다
        상태값이 바뀔때...setCount가 호출될때 App의 return이 동작하는데
        리액트 엔진은 이전화면과 비교해서 변경된 부분만을 다시 랜더링한다. 
      */}
      <h2>Hello React...userEffect !!</h2>
      <h2>조회수 증가하기 {count}</h2>
      <h2>검색 아이디 : {search}</h2>
      <button onClick={() => {
        setCount(count+1);
      }}>증가하기</button>

      <button onClick={() => {
        setSearch("KOSTA");
      }}>조회하기</button>
    </>
  );
}

export default App;
