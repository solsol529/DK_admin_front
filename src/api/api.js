import axios from "axios";
const HEADER = 'application/json';
const BASE_URL = "http://localhost:8090/developerKirby/";

const api = {
  userLogin: async function(id, pwd) {
    const loginObj = {
        id: id,
        pwd: pwd
    }
    return await axios.post(BASE_URL + "AdminLoginServlet", loginObj, HEADER);
},
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
  boardInfoDetail: async function() {
    const regCmd = {
      target : localStorage.getItem("target") //검색어 타겟 날려줌
    }
    return await axios.post(BASE_URL + "AdminBoardDetailServlet", regCmd, HEADER);
  },
  boardNameDup: async function(boardName) {
    const regCmd = {
      boardName : boardName
    }
    return await axios.post(BASE_URL + "AdminBoardNameDupServlet", regCmd, HEADER);
  },
  boardUpdate: async function(boardName, newName) {
    const regCmd = {
      boardName : boardName,
      newName : newName
    }
    return await axios.post(BASE_URL + "AdminBoardUpdateServlet", regCmd, HEADER);
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
  writeDelete: async function() {
    const regCmd = {
      target : localStorage.getItem("target") //삭제할 타겟들 날려줌
    }
    return await axios.post(BASE_URL + "AdminWriteDeleteServlet", regCmd, HEADER);
  },
  commentInfo: async function() {
    const regCmd = {
      cmd : "CommentInfo"
    }
    return await axios.post(BASE_URL + "AdminCommentServlet", regCmd, HEADER);
  },
  commentInfoSearch: async function() {
    const regCmd = {
      target : localStorage.getItem("target") //검색어 타겟 날려줌
    }
    return await axios.post(BASE_URL + "AdminCommentSearchServlet", regCmd, HEADER);
  },
  commentDelete: async function() {
    const regCmd = {
      target : localStorage.getItem("target") //삭제할 타겟들 날려줌
    }
    return await axios.post(BASE_URL + "AdminCommentDeleteServlet", regCmd, HEADER);
  },

};

export default api;