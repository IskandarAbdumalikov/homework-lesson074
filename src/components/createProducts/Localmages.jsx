import React, { memo } from "react";

const Localmages = ({ files }) => {
  return (
    <div className="local__images">
      {Object.values(files).map((el, inx) => (
        <img src={URL.createObjectURL(el)} key={inx} width={100} alt="" />
      ))}
    </div>
  );
};

export default memo(Localmages);
