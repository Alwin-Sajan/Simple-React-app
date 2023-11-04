import logo from './logo.svg';
import './App.css';
import { Header,Footer } from './Home';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="home-page">
        <div id="main-page">
          <div className="slide-show">
            <img src="" alt="" />
            <h1>Lunar</h1>
            <h4>Event Listing Platform</h4>
          </div>
          <div className="details">
            <div id="box1">
              <h2>heyyy</h2>
            </div>
            <div id="box2">
              <h2>Features</h2>
            </div>
          </div>
        </div>
        <div className="second-screen">
          <div className="second-view">
            <h3>Demo Events</h3>
            <ul className="events-list">
              <li>hhh</li>
              <li>hyui</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
