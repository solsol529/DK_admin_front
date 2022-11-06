import { isLogin } from "../../util/common";
import {useState} from "react";
import api from "../../api/api"

const LoginPage = ()=>{
  
  console.log(isLogin);

  const [inputId, setInputId] = useState("");
  const [inputPwd, setInputPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const onChangeId = (e) => {
    setInputId(e.target.value)
  }
  const onChangePwd = (e) => {
    setInputPwd(e.target.value);   
  }

  const onClickLogin = async() => {
    try {
      // 로그인을 위한 axios 호출
      const res = await api.userLogin(inputId, inputPwd);
      console.log(res.data.result);
      if(res.data.result === "OK") {
        localStorage.setItem("nickname", inputId);
        localStorage.setItem("pwd", inputPwd);
        window.location.replace("/member");
      }
      else { 
        console.log("로그인 에러..");
        setErrMsg("아이디 또는 비밀번호를 확인해주세요"); 
      }  
    } catch (e) {
      console.log(e);
    }
  }
  if(isLogin){
    window.location.replace("/member");
  } else{
    return(
      <div>
        <div>
          <input type="text" placeholder="아이디" value ={inputId} onChange={onChangeId}></input>
          <input type="password" placeholder="비밀번호" value ={inputPwd} onChange={onChangePwd}></input>
          <button onClick={onClickLogin}>로그인</button>
        </div>
      </div>
    );
  }
 
};
export default LoginPage;