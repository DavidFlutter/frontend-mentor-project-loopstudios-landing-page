import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import heroImage from "./assets/images/image-hero.jpg"

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <img src={heroImage} alt="" />
        <Header></Header>
        <Hero></Hero>
      </div>
    </div>
  );
}

export default App;
