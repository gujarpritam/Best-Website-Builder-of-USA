import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
