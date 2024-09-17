import React from 'react';

const DetailRow = ({ label, value, valueColor = 'text-black' }) => {
  return (
    <div className="flex flex-row w-full mb-2" name="boxDetail">
      <p className="mb-0 text-sm w-2/4" name="subtitleDetalle">{label}:</p>
      <div className="flex w-3/4">
        <p className={`mr-1 mb-0 w-full font-bold text-sm ${valueColor}`} name="Detalle">{value}</p>
      </div>
    </div>
  );
};

export default DetailRow;