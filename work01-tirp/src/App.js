import './App.css';

// 컴포넌트
function Header(props){
  return (
    // React Element를 리턴하는게 컴포넌트다!
    <header>
      <h1>Best Top 3 {props.title}</h1>
    </header>
  )
}
function Nav(props){
  return (
      <nav>
        <ol>
          <li>산티아고</li>
          <li>아씨씨</li>
          <li>칸쿤</li>
        </ol>
      </nav>
  )
}
function Article(props){
  return(
      <article>
        <h2>{props.title}</h2>
        <h4>{props.content}</h4>
      </article>
  )
}

function App() {

  return (
    <div className='outer'>
      <Header title="TRIPS"/>
      <Nav/>
      <Article title="태어난 김에 세계일주" content="올 겨울 최고의 찬스"/>
    </div>
  );
}

export default App;