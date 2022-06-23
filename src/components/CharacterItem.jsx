import React from "react";

const CharacterItem = ({ item }) => {
  return (
    <div className=" w-[220px] h-[300px] lg:w-[150px] lg:h-[240px] rounded-md  shadow-2xl shadow-red-700 hover:shadow-red-400">
      <img
        src={item.thumbnail.path + "/portrait_xlarge.jpg"}
        alt=""
        className="w-[220px] h-[260px] object-cover rounded-md lg:w-[150px] lg:h-[200px] "
      />
      <h1 className="flex justify-center py-2 ">{item.name}</h1>
    </div>
  );
};

export default CharacterItem;
