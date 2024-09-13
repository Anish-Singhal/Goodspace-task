import Navbar from "./Home/Navbar"
import Heading from "./Home/Heading";
import FeatureSection from "./Home/Feature-section";
import IntegrationSection from "./Home/Integration_section";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Heading/>
      <FeatureSection/>
      <IntegrationSection/>
    </div>
  );
}

export default App;
