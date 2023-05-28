import React from "react";

const FounderCard = ({ name, profile, pic }) => {
  return (
    <>
      <div className="flex flex-col items-center m-4">
        <div className="bg-gray-300 rounded-full w-[350px] h-full flex justify-center overflow-hidden pt-4">
          <img src={pic} alt={name} />
        </div>
        <div>
          <h2 className="text-lg text-center font-semibold">{name}</h2>
          <p className="text-center">{profile}</p>
        </div>
      </div>
    </>
  );
};

export default FounderCard;
