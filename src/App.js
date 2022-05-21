import './App.scss';
import Home from './components/Home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import ArticleData from './components/article/ArticleData';

function App() {
  return (
    <div className="App">
      <Router>

        <Nav/>
        <Routes>
         <Route exact="true" path="/" element={<Home />} />
         <Route path="/article" element={<ArticleData/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
