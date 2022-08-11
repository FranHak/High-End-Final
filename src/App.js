/* IMPORTS */

// SCSS import:
import './App.css';
// Components import:
import NavBar from './components/NavBar/NavBar';
import HeroImg from './components/HeroImg/HeroImg';
import FeelingGreat from './components/FeelingGreat/FeelingGreat';
import GalleryImg from './components/GalleryImg/GalleryImg';
import Slider from './components/Slider/Slider';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

/* COMPONENTS */
// App component:
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <HeroImg />
      </header>
      <main>
        <FeelingGreat />
        <Slider />
        <GalleryImg />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
