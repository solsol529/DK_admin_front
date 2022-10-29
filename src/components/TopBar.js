const TopBar = (props) =>{
  return(
    <div className="topBar">
      <span>{props.name}</span>
      <span>{props.high2}</span>
      {props.high2 && <span>&gt;</span>}
      <span>{props.high1}</span>
      {props.high1 && <span>&gt;</span>}
      <span>{props.name}</span>
    </div>
  );
};
export default TopBar;