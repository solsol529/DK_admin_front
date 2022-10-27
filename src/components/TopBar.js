const TopBar = (props) =>{
  return(
    <div className="topBar">
      <span>{props.name}</span>
      <span>{props.high2}</span>
      <span>{props.high1}</span>
      <span>{props.name}</span>
    </div>
  );
};
export default TopBar;