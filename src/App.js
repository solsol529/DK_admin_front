import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { isLogin } from "./util/common";

import "./style/reset.scss";
import "./style/main.scss";

import Header from "./components/Header";
import LoginPage from "./pages/login/LoginPage";
import Sidebar from "./components/SideBar";
import MemberManagement from "./pages/memberManagement/MemberManagement";
import Loader from "./components/Loader";
import BoardManagement from "./pages/contentManagement/BoardManagement";
import WriteManagement from "./pages/contentManagement/WriteManagement";
import WriteManagementSearch from "./pages/contentManagement/WriteManagementSearch"
import CommentManagement from "./pages/contentManagement/CommentManagement";
import AdManagement from "./pages/adManagement/AdManagement";
import NotiSend from "./pages/notiManagement/NotiSend";
import WriteManagementDetail from "./pages/contentManagement/WriteManagementDetail";
import BoardManagementDetail from "./pages/contentManagement/BoardManagementDetail";
import BoardManagementAdd from "./pages/contentManagement/BoardManagementAdd";
import AdManagementDetail from "./pages/adManagement/AdManagementDetail"
import AdManagementAdd from "./pages/adManagement/AdManagementAdd"

function App() {
  return (
    <div>
      <Router>
        <Header/>
        {isLogin && <Sidebar/>}
        <Routes>
          <Route path='/' element={<LoginPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          {/* {!isLogin && <Navigate to="/login" />} */}
          <Route path="/member" element={<MemberManagement/>}/>
          <Route path="/content/boardManagement" element={<BoardManagement/>}/>
          <Route path="/content/boardManagement/add" element={<BoardManagementAdd/>}/>
          <Route path="/content/boardManagement/detail/:board" element={<BoardManagementDetail/>}/>
          <Route path="/content/writeManagement" element={<WriteManagement/>}/>
          <Route path="/content/writeManagement/search/:query" element={<WriteManagementSearch/>}/>
          <Route path="/content/writeManagement/detail/:writeId" element={<WriteManagementDetail/>}/>
          <Route path="/content/commentManagement" element={<CommentManagement/>}/>
          <Route path="/adManagement" element={<AdManagement/>}/>
          <Route path="/adManagement/AdManagementDetail/:ad_num" element = {<AdManagementDetail/>}/>
          <Route path="/adManagement/AdManagementAdd" element = {<AdManagementAdd/>}/>
          <Route path="/noti/send" element={<NotiSend/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
