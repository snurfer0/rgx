import React from "react";

const Accordion = ({ name, text }) => {
  return (
    <>
      <button className="accordion">{name}</button>
      <div className="panel">
        <p>{text}</p>
      </div>
    </>
  );
};

export default Accordion;
