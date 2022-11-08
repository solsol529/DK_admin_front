import { Link } from "react-router-dom";
import logo from "../resource/sleep_kirby.gif";
import { isLogin, logout } from "../util/common";

const Header = () =>{ 
  return(
    <div className="header">
      <Link to={'/'} className="logo"><img src={logo} alt="개발하는커비"/>
      <span className="title">개발하는 커비</span></Link>
      {isLogin && 
        <p className="headerMenu">
          <span>관리자(ADMIN)</span>
          <button onClick={logout}>로그아웃</button>
        </p>
      }
    </div>
  );
};

export default Header;