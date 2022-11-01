import { useState, useEffect } from "react";
import api from "../../api/api";
import SearchBar from "../../components/SearchBar";
import TopBar from "../../components/TopBar";
import Pagination from "../../components/Pagination";
import Loader from "../../components/Loader";
import { isLogin } from "../../util/common";

const BoardManagement = () =>{
  const [lists, setLists] = useState('');
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;
  const [pageStart, setPageStart] = useState(0);

  const [loading, setLoading] = useState(false);
  const [prepared, setPrepared] = useState(false);

  const [inputSearch, setInputSearch] = useState('');

  const [isChange, setIsChange] = useState([]);
  // 바꿀 이름 담을 배열
  const [inputName, setInputName] = useState([]);

  // 체크된 아이템을 담을 배열
  const [checkItems, setCheckItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
     setLoading(true);
      try {
        const response = await api.boardInfo();
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

  const onChangeSearch = (e) =>{
    setInputSearch(e.target.value);
  }

  const onChangeName = (e) =>{
    setInputName(e.target.value);
  }

  const boardSearch = () =>{
    window.localStorage.setItem("target", inputSearch);
    const fetchSearchData = async () => {
      setLoading(true);
       try {
         const response = await api.boardInfoSearch();
         setLists(response.data);
         setPrepared(true);
       } catch (e) {
         console.log(e);
       }
       setLoading(false);
     };
    fetchSearchData();
  }

  const boardDelete = () =>{
    window.localStorage.setItem("target", checkItems);
    const fetchDeleteData = async () => {
      setLoading(true);
       try {
         const response = await api.boardDelete();
         setLists(response.data);
         setPrepared(true);
       } catch (e) {
         console.log(e);
       }
       setLoading(false);
     };
    fetchDeleteData();
    setCheckItems([]);
  }
  
  // 체크박스 단일 선택
  const handleSingleCheck = (checked, id) => {
    if (checked) {
      // 단일 선택 시 체크된 아이템을 배열에 추가
      setCheckItems(prev => [...prev, id]);
    } else {
      // 단일 선택 해제 시 체크된 아이템을 제외한 배열 (필터)
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };

  // 체크박스 전체 선택
  const handleAllCheck = (checked) => {
    if(checked) {
      // 전체 선택 클릭 시 데이터의 모든 아이템(id)를 담은 배열로 checkItems 상태 업데이트
      const idArray = [];
      lists.forEach((el) => idArray.push(el.boardName));
      setCheckItems(idArray);
    }
    else {
      // 전체 선택 해제 시 checkItems 를 빈 배열로 상태 업데이트
      setCheckItems([]);
    }
  }


  return(
    <div className="center">
      <TopBar name="게시판 관리" high1="콘텐츠 관리"/>
      <div className="searchBar">
        <input type="text" placeholder="게시판 이름" value ={inputSearch} onChange={onChangeSearch}/>
        <button onClick={boardSearch}>검색</button>
      </div>
      <div>
        <div className="tableWrapper">
          <table>
            <thead>
              <tr>
                <input type='checkbox' name='select-all'
                  onChange={(e) => handleAllCheck(e.target.checked)}
                  // 데이터 개수와 체크된 아이템의 개수가 다를 경우 선택 해제 (하나라도 해제 시 선택 해제)
                  checked={checkItems.length === (lists.length % 10) ? true : false} 
                />
                <th>게시판 번호</th>
                <th>게시판 이름</th>
                <th>게시글 수</th>
              </tr>
            </thead>
            <tbody>
              { prepared &&
                lists.slice(offset, offset + limit)
                .map(({ boardNum, boardName, countWrite }) => (
                  <tr>
                    <td>
                    <input type='checkbox' 
                      name={`select-${boardName}`}
                      onChange={(e) => handleSingleCheck(e.target.checked, boardName)}
                      // 체크된 아이템 배열에 해당 아이템이 있을 경우 선택 활성화, 아닐 시 해제
                      checked={checkItems.includes(boardName) ? true : false} 
                      />
                    </td>
                    <td>{boardNum}</td>
                    <td>{boardName}</td>
                    <td>{countWrite}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          <button onClick={boardDelete}>삭제</button>
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
export default BoardManagement;