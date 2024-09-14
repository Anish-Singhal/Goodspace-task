import Navbar from "./Home/Navbar"
import TopSection from "./Home/Top_Section";
import FeatureSection from "./Home/Feature-section";
import CustomerSection from "./Home/Customer_section"
import IntegrationSection from "./Home/Integration_section";
// import Footer from "./Home/Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <TopSection/>
      <FeatureSection/>
      <IntegrationSection/>
      <CustomerSection/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
