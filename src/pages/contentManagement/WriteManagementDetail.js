import { useState, useEffect } from "react";
import api from "../../api/api";
import Loader from "../../components/Loader";
import { isLogin } from "../../util/common";
import TopBar from "../../components/TopBar";
import { useParams } from 'react-router-dom';

const WriteManagementDetail = () =>{

  let { writeId } = useParams();

  const [lists, setLists] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
     setLoading(true);
     window.localStorage.setItem("target", writeId);
      try {
        const response = await api.writeInfoDetail();
        setLists(response.data);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if(!isLogin){
    window.location.replace("/");
  }
  
  if(loading) {
    return <div className="center"><Loader/></div>
  }

  if(isLogin){
    return(
      <div className="center">
        <TopBar name="게시글 상세" high1="게시글 관리" high2="콘텐츠 관리"/>
        <div>
          {lists &&
            lists
            .map(({ boardName, writeNum, writeName, writeDate, nickname, countGood, countComment, writeContents, comments}) => (
              <>
              <span>{boardName}</span>
              <span>{writeNum}</span>
              <span>{writeName}</span>
              <span>{nickname}</span>
              <span>{writeDate}</span>
              <span>댓글수 {countComment}</span>
              <span>좋아요수{countGood}</span>
              <p>{writeContents}</p>
              <hr/>
              {comments && comments
              .map(({nickname, writeDate, commentContent})=>(
                <>
                {nickname}
                {writeDate}
                {commentContent}
                </>
              ))}
              </>
            ))
          }
        </div>
      </div>
    );
  }
};
export default WriteManagementDetail;