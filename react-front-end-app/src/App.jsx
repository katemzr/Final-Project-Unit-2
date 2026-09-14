import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/Header";
import HomePage from "./components/pages/HomePage";
import ContactUsPage from "./components/pages/ContactUsPage";
import MyPuzzlesPage from "./components/pages/MyPuzzlesPage";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import PuzzleCard from "./components/PuzzleCard";
import "./index.css"
import LoginForm from "./components/LoginForm";






function App() {
 const [ user, setUser ] = useState(null);
 const handleLogin = (credentials) => {
    if (credentials.email === "admin@admin.com" && credentials.password === "1234") {
      setUser({ name: "Admin", role: "administrator" });
    }
 };

 const handleLogout = () => {
  setUser(null);
  
 };
   
  return (
    <BrowserRouter>
    <div id='body-container'>
      <Header />

      {user ? (

        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contactus" element={<ContactUsPage />} />
            <Route path="/mypuzzles" element={<MyPuzzlesPage />} />          
          </Routes>
          <div>          
            <button className="buttons" onClick={handleLogout}>Log Out</button>
          </div>
        </div>

        ) : (

        <div>
          <Routes>
            <Route path="/" element={<LoginForm onLogin={handleLogin} />} /> 
            <Route path="/contactus" element={<LoginForm onLogin={handleLogin} />} />
            <Route path="/mypuzzles" element={<LoginForm onLogin={handleLogin} />} />      
          </Routes>
        </div>

        )
      }
      <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
