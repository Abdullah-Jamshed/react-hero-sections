import "../styles/App.css";
import Nav from "./Nav";
import HeroSection1 from "./HeroSection1";
import HeroSection2 from "./HeroSection2";

const App = () => {
  return (
    <div className='App'>
      <Nav />

      <HeroSection1 />
      {/* <HeroSection2 /> */}
    </div>
  );
};

export default App;
