import './App.scss';
import Home from './components/Home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Article from './components/Article';

function App() {
  return (
    <div className="App">
      <Router>

        <Nav/>
        <Routes>
         <Route exact="true" path="/" element={<Home />} />
         <Route path="/article" element={<Article/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
