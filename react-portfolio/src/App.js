import Layout from './components/Layout';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/Home/About';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Work from "./components/Work";

function App() {
  return (
      <>
      <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<Home />}  />
                <Route path="/about" element={<About />}/>
                <Route path="work" element={<Work />} />
                <Route path="/contact" element={<Contact />} />
            </Route>
      </Routes>
      </>
  )
}

export default App;
