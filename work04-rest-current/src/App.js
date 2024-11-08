import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Container} from 'react-bootstrap';
import Header from './components/Header';
import Navirouter from './Navirouter';

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
      </Container>
      <Navirouter/>
    </div>
  );
}

export default App;
