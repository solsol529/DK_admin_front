import { useState, useEffect } from "react";
import api from "../../api/api";
import Loader from "../../components/Loader";
import { isLogin } from "../../util/common";
import TopBar from "../../components/TopBar";
import { useParams } from 'react-router-dom';

const BoardManagementDetail = () =>{

  let { board } = useParams();

  const [lists, setLists] = useState('');
  const [loading, setLoading] = useState(false);
  const [newBoardName, setNewBoardName] = useState(board);

  useEffect(() => {
    const fetchData = async () => {
     setLoading(true);
     window.localStorage.setItem("target", board);
      try {
        const response = await api.boardInfoDetail();
        setLists(response.data);
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
  
  const onChangeBoard = (e) =>{
    setNewBoardName(e.target.value);
  }

  return(
    <div className="center">
      <TopBar name="게시판 상세" high1="게시판 관리" high2="콘텐츠 관리"/>
      <div>
        {lists &&
          lists
          .map(({ countWrite, writes}) => (
            <>
            <input type="text" value={newBoardName} onChange={onChangeBoard}/>
            <button>수정</button>
            <span>게시글 수 총{countWrite}개</span>
            <hr/>
            <p>최근 게시판에 작성된 글 {writes.length}개</p>
            {writes && writes
            .map(({writeName, writeDate, nickname})=>(
              <>
              글제목{writeName}
              작성자{nickname}
              작성시간{writeDate}
              </>
            ))}
            {!writes && <p>해당 게시판에 게시글이 없습니다!</p>}
            </>
          ))
        }
      </div>
    </div>
  );
};
export default BoardManagementDetail;