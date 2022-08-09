import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Packages from './Packages';
import NotFound from './NotFound';
import About from './About';
import Results from './Results';
import Footer from './Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/packages" element={<Packages />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/results" element={<Results />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;