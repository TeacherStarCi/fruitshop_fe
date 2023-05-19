import NavigationBar from "./components/NavigationBar";
import HomePage from "./components/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutPage from "./components/AboutPage";
import { Routes, Route } from 'react-router-dom';
import SearchPage from "./components/SearchPage";
function App() {
  return (
    <div className = 'App'>
      <NavigationBar/>

      <Routes >
      <Route path="/" element={ <HomePage /> } />
      <Route path="/search" element={ <SearchPage /> } />
      <Route path="/about" element={ <AboutPage /> } />
      </Routes>
      
    </div>
  );
}

export default App;
