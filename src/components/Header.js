import { Link } from "react-router-dom";
import logo from "../resource/sleep_kirby.gif";
import { isLogin, logout } from "../util/common";

const Header = () =>{ 
  return(
    <div className="header">
      <p className="logo"><Link to={'/'}><img src={logo} alt="개발하는커비"/>개발하는 커비</Link></p>
      {isLogin && 
        <p className="headerMenu">
          <span>관리자(admin)</span>
          <button onClick={logout}>로그아웃</button>
        </p>
      }
    </div>
  );
};

export default Header;