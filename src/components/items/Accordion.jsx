import React, {useState} from "react";

const Accordion = ({ name, text }) => {

  const [isActive, setIsActive] = useState(false)

  return (
    <>
      <button onClick={() => setIsActive(!isActive)} className={`accordion ${isActive ? "active1" : ""}`}>{name}</button>
      <div className="panel" style={{maxHeight: `${isActive ? "197px" : "0px"}`}}>
        <p>{text}</p>
      </div>
    </>
  );
};

//max-height: 197px;

export default Accordion;
