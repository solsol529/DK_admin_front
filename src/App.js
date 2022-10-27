import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./style/reset.scss";
import "./style/main.scss";

import Header from "./components/Header";
import LoginPage from "./pages/login/LoginPage";

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
