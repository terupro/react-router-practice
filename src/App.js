import { BrowserRouter as Router, Link } from 'react-router-dom';
import { Routing } from './router/Routing';

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
     <Routing />
    </Router>
  );
}

export default App;
