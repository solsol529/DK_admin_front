const isLogin = !!localStorage.getItem("nickname");

const logout = () =>{
  localStorage.removeItem("nickname");
  localStorage.removeItem("pwd");
  window.location.replace("/");
}
export {isLogin, logout};