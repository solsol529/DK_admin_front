import { useState, useEffect } from "react";
import api from "../../api/api";
import SearchBar from "../../components/SearchBar";
import TopBar from "../../components/TopBar";
import Pagination from "../../components/Pagination";
import Loader from "../../components/Loader";

const MemberManagement = () =>{
  const [lists, setLists] = useState('');
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const [loading, setLoading] = useState(false);

  const [prepared, setPrepared] = useState(false);

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

  if(loading) {
    return <div className="center"><Loader/></div>
  }
  
  return(
    <div className="center">
      <TopBar name="회원 현황" high1="회원관리"/>
      <SearchBar/>
      <div>
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
              </tr>
            </thead>
            <tbody>
              { prepared &&
                lists.slice(offset, offset + limit)
                .map(({ memberNum, nickname, grade, countWrite, countComment, phone, email, regDate }) => (
                  <tr>
                    <td>{memberNum}</td>
                    <td>{nickname}</td>
                    <td>{grade}</td>
                    <td>{countWrite}</td>
                    <td>{countComment}</td>
                    <td>{phone}</td>
                    <td>{email}</td>
                    <td>{regDate}</td>
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
        />
      </div>
    </div>
  );
};
export default MemberManagement;