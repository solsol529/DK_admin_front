import { useState, useEffect } from "react";
import api from "../../api/api";
import Loader from "../../components/Loader";
import { isLogin } from "../../util/common";
import TopBar from "../../components/TopBar";

const WriteManagementDetail = () =>{
  const [lists, setLists] = useState('');
  const [loading, setLoading] = useState(false);
  const [prepared, setPrepared] = useState(false);

  // 체크된 아이템을 담을 배열
  const [checkItems, setCheckItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
     setLoading(true);
      try {
        const response = await api.memberInfo();
        setLists(response.data);
        setPrepared(true);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if(!isLogin){
    alert("잘못된 접근입니다!");
    window.location.replace("/");
  }
  
  if(loading) {
    return <div className="center"><Loader/></div>
  }
  
  return(
    <div className="center">
      <TopBar name="게시글 상세" high1="게시글 관리" high2="콘텐츠 관리"/>
      <div>
        <span>프로필이미지</span>
        <span>게시글 제목</span>
        <span>작성자</span>
        <span>작성상세시간</span>
        <span>댓글수</span>
        <span>좋아요수</span>
      </div>
      <div>
        게시글내용
      </div>
      <div>
        댓글
      </div>
    </div>
  );
};