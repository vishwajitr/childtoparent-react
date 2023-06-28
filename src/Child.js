import React from "react";

const Child = (props) => {
  const onClick = () => {
    props.senddata("Raman");
  };
  return (
    <div>
      <button onClick={onClick}>Mine</button>
    </div>
  );
};
export default Child;
