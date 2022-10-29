import { useState, useEffect } from "react";
import api from "../api/api";
import Loader from "../components/Loader";
import { isLogin } from "../util/common";
import TopBar from "../components/TopBar";
const MainPage = () =>{
  if(!isLogin){
    alert("잘못된 접근입니다!");
    window.location.replace("/");
  }
  return(
    <div className="center">
      <div>
        좋아요 많은 게시글 5개정도
      </div>
      <div>
        최근 등록된 게시글 5개정도
        <button>게시글 관리로 이동</button>
      </div>
      <div>
        최근 가입한 회원 5명정도
        <button>회원 관리로 이동</button>
      </div>
      <div>
        최근 등록된 댓글 5개정도
        <button>댓글 관리로 이동</button>
      </div>
    </div>
  );
};

export default MainPage;