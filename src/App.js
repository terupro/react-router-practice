import { Home } from './components/Home';
import { Page2 } from './components/Page2';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { Page1 } from './components/Page1';

function App() {
  return (
    <Router>
    <div className="App">
      <Link to='/'>Home</Link>
      <br />
      <Link to='/page1'>Page1</Link>
      <br />
      <Link to='/page2'>Page2</Link>
    </div>
    <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/page1' element={<Page1 />}></Route>
        <Route path='/page2' element={<Page2 />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
