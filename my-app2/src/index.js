import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PMS from './phones/PMService';
import Clock from './time/Clock';
import Phone from './phones/Phone';

//1. const, function사용해서 ui의 내용을 구성
/*
const member = {
  id:"kosta",
  pwd: "1234",
  name: "홍종각",
  address: "종각", //trial comma : 해주는게 정식적이다
}

function getToken(member){
  return member.id + " " + member.name;
}

const uielement = (
  <h1>Hello, {getToken(member)}</h1>
)
*/

const root = ReactDOM.createRoot(document.getElementById('root'));

setInterval(() => {
  root.render(
    //3. Custom Tag
    <>
      <div>
        <Phone model={"IPhone-16"} made={"Apple"}/>
        <Phone model={"갤럭시 S23"} made={"삼성"}/>
        <Phone model={"갤럭시 S24"} made={"삼성"}/>
      </div>
      <Clock/>
    </>
  )
}, 1000);

/*
root.render(
//  uielement ....1
<React.StrictMode>
  <PMS/>

</React.StrictMode>
);
*/