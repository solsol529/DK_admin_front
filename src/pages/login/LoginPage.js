import { Link } from "react-router-dom";
import { isLogin } from "../../util/common";
const LoginPage = ()=>{
  if(isLogin){
    return(
      <div className="center">
        <p>잘못된 접근입니다</p>
      </div>
    );
  }
  return(
    <div>
      <div>
        <input type="text"></input>
        <input type="password"></input>
        <button>로그인</button>
      </div>
    </div>
  );
};
export default LoginPage;