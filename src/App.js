import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { isLogin } from "./util/common";

import "./style/reset.scss";
import "./style/main.scss";

import Header from "./components/Header";
import LoginPage from "./pages/login/LoginPage";
import Sidebar from "./components/SideBar";
import MemberManagement from "./pages/memberManagement/MemberManagement";
import Loader from "./components/Loader";

function App() {
  return (
    <div>
      <Router>
        <Header/>
        {isLogin && <Sidebar/>}
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          {!isLogin && <Navigate to="/login" />}
          <Route path="/member" element={<MemberManagement/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
