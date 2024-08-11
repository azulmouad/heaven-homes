import "./App.css";
import Hero from "./components/Hero/Hero";
import Invest from "./components/Invest/Invest";
import NavBar from "./components/NavBar/NavBar";
import Tab from "./components/Tab/Tab";
import Title from "./components/Title/Title";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <div className="container">
        <Invest />
        <Title />
        <Tab />
      </div>
    </>
  );
}

export default App;
