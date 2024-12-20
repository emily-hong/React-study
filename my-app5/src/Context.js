import React, { createContext, useContext, useState } from 'react';

//글로벌한 성격임으로.. Context 밖에서 선언
const UserContext = createContext();

const Context = () => {
  const [user, setUser] = useState("홍종각");

  return (
    <div>
      <UserContext.Provider value={user}/>

      <h2>Hello, {user}</h2>
      <Component1 />
    </div>
  );
};

// component..................................................
function Component1(){
  return (
    <>
      <h2>Component1...</h2>
      <Component2 />
    </>
  )
}
function Component2(){
  return (
    <>
      <h2>Component2...</h2>
      <Component3 />
    </>
  )
}
function Component3(){
  const user = useContext(UserContext)

  return (
    <>
      <h2>Component3...</h2>
      <h2>Hello {user} 다시 만나서 반가워요~!!</h2>
    </>
  )
}

export default Context;