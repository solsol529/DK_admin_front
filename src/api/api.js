import axios from "axios";
const HEADER = 'application/json';
const BASE_URL = "http://localhost:8090/developerKirby/";

const api = {
  // 회원 정보 조회
  memberInfo: async function() {
    const regCmd = {
      cmd : "MemberInfo" //조회는 이름만 날려주면됨
    }
    return await axios.post(BASE_URL + "AdminMemberServlet", regCmd, HEADER);
  }
};

export default api;