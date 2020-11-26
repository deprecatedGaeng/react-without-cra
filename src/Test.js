import React, {useState} from "react";

const Test = ({name}) => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => setIsClicked(true);
  
  return (
    <div>
      <button onClick={() => handleClick()}>{name}! CLICK ME!</button>
      <span>{isClicked && "CLICKED"}</span>
    </div>
  )
}

export default Test;