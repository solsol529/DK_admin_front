import { Link } from "react-router-dom";
const LoginPage = ()=>{
  return(
    <div>
      <div>
        <input type="text"></input>
        <input type="password"></input>
        <button>로그인</button>
        <p><Link to="/">이동</Link></p>
      </div>
    </div>
  );
};
export default LoginPage;