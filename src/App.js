import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";


function App() {
  return (
    <>
      <Router>
       <Header>
        
       </Header>
        <Routes>
          <Route path="/forgot-password" element={<ForgotPassword/>}></Route>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/offers" element={<Offers/>}></Route>
          <Route path="/profile" element={<Profile/>}></Route>
          <Route path="/sign-in" element={<SignIn/>}></Route>
          <Route path="/sign-out" element={<SignUp/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
