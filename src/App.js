import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import SectionOne from './components/SectionOne';
import heroImage from "./assets/images/image-hero.jpg"
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <div className="wrapper">
        <img src={heroImage} alt="" />
        <Header></Header>
        <Hero></Hero>
        <SectionOne></SectionOne>
        <Gallery></Gallery>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
