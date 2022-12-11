import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import Announcement from './Component/Announcement';
import MainCorousel from './Component/MainCorousel';
import Categories from './Component/Categories';
import Footer from './Component/Footer';
import Newsletter from './Component/Newsletter';


function App() {
  return (
    <div className="App">
      <Announcement />
      <Navbar />
      <MainCorousel />
      <Categories />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
