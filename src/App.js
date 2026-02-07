import Header from './Components/Header';
import Hero from './Components/Hero';
import Section from './Components/Section';
import imgsection from "./Assets/IMG.svg"
import Article from "./Components/Article"
import Active from "./Components/Active"
import DividerSection from './Components/DividerSection';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="conatiner">
      <Header />
      <Hero />
      <Section />
      <img className='img-section' src={imgsection} />
      <Article />
      <Active />
      <DividerSection />
      <Footer />
    </div>
  );
}

export default App;
