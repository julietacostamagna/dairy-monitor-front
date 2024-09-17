import React from 'react';
import './CardInfo.css'; 

const CardInfo = ({ title, children, color }) => {
  return (
    <div className="cardInfo">
      <p className="titleCardInfo" style={{background: color}} name="TitleCard">{title}</p>
      <div className="flex flex-row mt-2 w-full p-3 text-black dark:text-white" name="boxfullDetail">
        {children}
      </div>
    </div>
  );
};

export default CardInfo;