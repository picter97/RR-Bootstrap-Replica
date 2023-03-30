import './App.css';
import NavBar from './components/NavBar';
import ImgOverlay from './components/ImgOverlay';
import StoreListing from './components/StoreListing';
function App() {
  return (
    <div>
      <NavBar/>
      <div>
        <ImgOverlay/>
      </div>
      <div>
        <StoreListing/>
      </div>
    </div>
  );
}

export default App;
