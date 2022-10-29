import { useState, useEffect } from "react";
import api from "../../api/api";
import Loader from "../../components/Loader";
import { isLogin } from "../../util/common";
import TopBar from "../../components/TopBar";

const AdManagementDetail = () =>{
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
      <TopBar name="배너 상세" high1="배너 관리" high2="광고 관리"/>
      <div>
        <label>
          <span>배너 이름</span>
          <input type="text"/>
        </label>
        <label>
          <span>배너 이동 URL</span>
          <input type="text"/>
        </label>
        <label>
          <span>배너 상태</span>
          <label><input type="radio"/>활성화</label>
          <label><input type="radio"/>비활성화</label>
        </label>
        <button>수정하기</button>
      </div>
     
    </div>
  );
};
export default AdManagementDetail;
