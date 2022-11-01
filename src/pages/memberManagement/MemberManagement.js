import { useState, useEffect } from "react";
import api from "../../api/api";
import SearchBar from "../../components/SearchBar";
import TopBar from "../../components/TopBar";
import Pagination from "../../components/Pagination";
import Loader from "../../components/Loader";
import { isLogin } from "../../util/common";
import Modal from "../../components/Modal";

const MemberManagement = () =>{
  const [lists, setLists] = useState('');
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const [pageStart, setPageStart] = useState(0);

  const [loading, setLoading] = useState(false);
  const [prepared, setPrepared] = useState(false);

  // 모달창 노출 여부 state
  const [modalOpen, setModalOpen] = useState(false);

  // 모달창 노출
  const showModal = () => {
      setModalOpen(true);
  };

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
      <TopBar name="회원 현황" high1="회원 관리"/>
      <SearchBar/>
      <div>
        <label>
          페이지 당 표시할 게시물 수:&nbsp;
          <select
            type="number"
            value={limit}
            onChange={({ target: { value } }) => {
              setLimit(Number(value));
              setPage(1);
              setPageStart(0);
            }}
          >
            <option value="5">5</option>
            <option value="7">7</option>
            <option value="10" selected>10</option>
            <option value="12">12</option>
            <option value="20">30</option>
          </select>
        </label>
        <div className="tableWrapper">
          <table>
            <thead>
              <tr>
                <th>회원번호</th>
                <th>닉네임</th>
                <th>등급</th>
                <th>게시글 수</th>
                <th>댓글 수</th>
                <th>핸드폰 번호</th>
                <th>이메일</th>
                <th>가입일</th>
                <th>프로필 이미지</th>
                <th>광고 수신 동의 여부</th>
              </tr>
            </thead>
            <tbody>
              { prepared &&
                lists.slice(offset, offset + limit)
                .map(({ memberNum, nickname, grade, countWrite, countComment, phone, email, regDate, pfImg, isAdOk }) => (
                  <tr>
                    <td>{memberNum}</td>
                    <td>{nickname}</td>
                    <td>{grade}</td>
                    <td>{countWrite}</td>
                    <td>{countComment}</td>
                    <td>{phone}</td>
                    <td>{email}</td>
                    <td>{regDate}</td>
                    <td>
                      {pfImg && <button onClick={showModal}>이미지 보기</button>}
                      {modalOpen && <Modal setModalOpen={setModalOpen} imgUrl={pfImg}/>}
                    </td>
                    <td>{isAdOk? "O":"X"}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
        <Pagination
          total={lists.length}
          limit={limit}
          page={page}
          setPage={setPage}
          pageStart={pageStart}
          setPageStart={setPageStart}
        />
      </div>
    </div>
  );
};
export default MemberManagement;