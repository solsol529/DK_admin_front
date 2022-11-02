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
  },
  memberInfoSearch: async function() {
    const regCmd = {
      target : localStorage.getItem("target") //검색어 타겟 날려줌
    }
    return await axios.post(BASE_URL + "AdminMemberSearchServlet", regCmd, HEADER);
  },
  boardInfo: async function() {
    const regCmd = {
      cmd : "BoardInfo"
    }
    return await axios.post(BASE_URL + "AdminBoardServlet", regCmd, HEADER);
  },
  boardInfoSearch: async function() {
    const regCmd = {
      target : localStorage.getItem("target") //검색어 타겟 날려줌
    }
    return await axios.post(BASE_URL + "AdminBoardSearchServlet", regCmd, HEADER);
  },
  boardDelete: async function() {
    const regCmd = {
      target : localStorage.getItem("target") //삭제할 타겟들 날려줌
    }
    return await axios.post(BASE_URL + "AdminBoardDeleteServlet", regCmd, HEADER);
  },
  writeInfo: async function() {
    const regCmd = {
      cmd : "WriteInfo"
    }
    return await axios.post(BASE_URL + "AdminWriteServlet", regCmd, HEADER);
  },
  writeInfoSearch: async function() {
    const regCmd = {
      target : localStorage.getItem("target") //검색어 타겟 날려줌
    }
    return await axios.post(BASE_URL + "AdminWriteSearchServlet", regCmd, HEADER);
  },
  writeInfoDetail: async function() {
    const regCmd = {
      target : localStorage.getItem("target") //검색어 타겟 날려줌
    }
    return await axios.post(BASE_URL + "AdminWriteDetailServlet", regCmd, HEADER);
  },
};

export default api;