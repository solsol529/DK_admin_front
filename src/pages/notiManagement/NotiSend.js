import React, { useState, useEffect } from "react";
import api from "../../api/api";
import Loader from "../../components/Loader";
import { isLogin } from "../../util/common";
import TopBar from "../../components/TopBar";

const NotiSend = () =>{
  const [lists, setLists] = useState('');
  const [loading, setLoading] = useState(false);
  const [prepared, setPrepared] = useState(false);

  const [mail,setMail] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [disabled, setDisabled] = useState(true);
  

  const onChangeTitle = (e) =>{
    setTitle(e.target.value);
  } 
  const onChangeContent = (e) => {
    setContent(e.target.value);
  } 

  // 체크된 아이템을 담을 배열
  const [checkItems, setCheckItems] = useState([]);

  const adminNotiSend = () => {
    setPrepared(false);
    const fetchDeleteData = async () => {
      setLoading(true);
       try {
         const response = await api.adminNotiSend(mail, title, content);
         setLists(response.data);
         console.log(response.data);
         setPrepared(true);
       } catch (e) {
         console.log(e);
       }
       setLoading(false);
       alert("발송이 완료되었습니다!!!!!!!");
       window.location.replace("/");
     };
    fetchDeleteData();
    setCheckItems([]);
    }
  

  if(!isLogin){
    window.location.replace("/");
  }
  
  if(loading) {
    return <div className="center"><Loader/></div>
  }

  const handleClickRadioButton = (e) => {
    console.log("선택한 값 : " + e.target.value);
    setMail(e.target.value);
    setDisabled(false);
  }
  

return(
  <div className="center">
    <TopBar name="알림 발송" high1="알림 관리"/>
    <label className="notilabel">
      <span>알림 분류</span>
      <div>
      <label><input type="radio" name="notisend" onChange={handleClickRadioButton} value="notice" />공지사항</label>
      <label><input type="radio" name="notisend" onChange={handleClickRadioButton} value="ad"/>광고</label>
      </div>
    </label>
    <br/>
      <label>
        <span className="notispan1">제목</span>
        <input type="text" value={title} onChange={onChangeTitle}/>
      </label>
      <br/>
      <label className="notiareaname">
        <span>내용</span>
        <textarea className="notiarea" value={content} onChange={onChangeContent}
        placeholder="자동으로 회원의 이름이 알림 내용에 들어갑니다"/>
      </label>
      <br/>
      <button className="notibutton"
      onClick={adminNotiSend} disabled ={disabled} >발송</button>
    </div>
  );
};
export default NotiSend;