import { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (i) => {
    if (activeIndex === i){
      return setActiveIndex(null)
    }
    setActiveIndex(i)
  }

  return (
    <>
    <div className="sidebar">
      <ul className="depth1">
      {data.map((item, i) => {
        return (
        <li key={i} onClick={() => toggle(i)}
        className={ activeIndex === i ? 'show' : ''}>
          <button>{item.depth1}</button>
          <ul className="depth2">
            {item.depth2.map((subMenu, i) => (
            <li key={i}><Link to={item.link[i]}>{subMenu}</Link></li>
            ))}
          </ul>
        </li>
      )})}
      </ul>
    </div>
    </>
  );
}

export default Sidebar;


const data = [
  {
    depth1: '회원관리',
    depth2: ['회원현황'],
    link: ['/member']
  },
  {
    depth1: '콘텐츠관리',
    depth2: ['게시판관리','게시글관리','댓글관리'],
    link: ['/content/boardManagement','/content/writeManagement','/content/commentManagement']
  },
  {
    depth1: '광고관리',
    depth2: ['배너관리'],
    link: ['/adManagement']
  },
  {
    depth1: '알림관리',
    depth2: ['알림발송'],
    link: ['/noti/send']
  },
  // {
  //   depth1: '약관관리',
  //   depth2: ['약관관리'],
  //   link: ['/termManagement']
  // },
]