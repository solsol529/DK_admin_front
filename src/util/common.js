const isLogin = () => !!localStorage.getItem("nickname");
const logout = () =>{
  localStorage.removeItem("nickname");
  localStorage.removeItem("pwd");
}
export {isLogin, logout};