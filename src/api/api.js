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
  boardInsert: async function(newName) {
    const regCmd = {
      newName : newName
    }
    return await axios.post(BASE_URL + "AdminBoardInsertServlet", regCmd, HEADER);
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
  adInfo : async function() {
    const adCmd ={
      cmd :  "AdInfo"
    }
    return await axios.post(BASE_URL + "AdminAdServlet", adCmd, HEADER);
  },
  adminAdDelete: async function() {
    const regCmd = {
      target : localStorage.getItem("target") //삭제할 타겟들 날려줌
    }
    return await axios.post(BASE_URL + "AdminAdDeleteServlet", regCmd, HEADER);
  },
  adminAdUpdateInfo: async function(ad_num) {
  const regCmd = {
    ad_num: ad_num,
    cmd : "AdUpdateInfo"
  }
  return await axios.post(BASE_URL + "AdminUpdateInfoServlet" ,regCmd, HEADER);
  },
  adminAdUpdate: async function(ad_num, ad_name, ad_url, ad_img) {
    const adObj = {
      ad_num: ad_num,
      ad_name: ad_name,
      ad_url: ad_url,
      ad_img: ad_img,
    }
    return await axios.post(BASE_URL + "AdminAdUpdateServlet", adObj, HEADER);
  },
  adminAdAdd: async function(ad_name, ad_url, ad_img) {
    const adObj = {
      ad_name: ad_name,
      ad_url: ad_url,
      ad_img: ad_img,
    };
    return await axios.post(BASE_URL + "AdminAdAddServlet", adObj, HEADER);
  },
  adminNotiSend :async function(mail, title, content) {
    const adObj = {
      mail :mail,
      title : title,
      content: content
    };
    return await axios.post(BASE_URL + "AdminADNotiSendServlet", adObj, HEADER);
  },
};

export default api;