import './App.css';
import Header from './component/Header';
import Main from './component/Main';
import Gallery from './component/Gallery';
import Leader from './component/Leader';
import Testimonial from './component/Testimonial';
import Footer from './component/Footer';
import Statistic from './component/Statistic';

function App() {
  return (
    <div style={{
      background: "#192655"
    }}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Rajdhani&family=Ubuntu:ital@1&display=swap" rel="stylesheet" />

      <Header />
      <Leader />
      <Main />
      <Statistic />
      <Gallery />
      <Testimonial />
      <Footer />
    </div>
  );
}

export default App;
