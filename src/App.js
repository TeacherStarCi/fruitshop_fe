import NavigationBar from "./components/NavigationBar";
import HomePage from "./components/HomePage";
import 'bootstrap/dist/css/bootstrap.min.css';
import AboutPage from "./components/AboutPage";
import { Routes, Route } from 'react-router-dom';
import SearchPage from "./components/SearchPage";
import SignIn from "./components/SignIn";
import { GoogleLogin } from "@react-oauth/google";
function App() {
  const responseMessage = (response) => {
    console.log(response);
};
const errorMessage = (error) => {
    console.log(error);
};

  return (
  
    <div className = 'App'>
      <NavigationBar/>
    

      
      <Routes >
      <Route path="/" element={ <HomePage /> } />
      <Route path="/search" element={ <SearchPage /> } />
      <Route path="/about" element={ <AboutPage /> } />
      <Route path="/signin" element={ <SignIn /> } />
      </Routes>
      
    </div>
  );
}

export default App;
