import './App.css';
import imageInSrc from "./imageInSrc.png"
import myVideo from "./myVideo.mp4"

function App() {
  return (
    <div className="App">
      <div className="box">

        <h1 className="title">Imene Bendahgane</h1>

        {/* <br > */}

        <img src={imageInSrc} alt="sourceImg" />

        {/* <br > */}

        <img src="/imageInPublic.png" alt="publicImg" />

      </div>
      <video preload='auto'>
        <source src={myVideo} type="video/mp4" alt="expected video"/>
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
}

export default App;
