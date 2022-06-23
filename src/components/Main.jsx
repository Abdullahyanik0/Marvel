import React from "react";
import CharacterItem from "./CharacterItem";
import { Spinner } from "@chakra-ui/react";

const Main = ({ items, isLoading }) => {
  return isLoading ? (
    <div className="flex flex-col items-center h-screen pt-72">
        <h1 className="text-5xl pb-6">Loading...</h1>
      <Spinner
        thickness="4px"
        speed="1s"
        emptyColor="white"
        color="red.500"
        size="xl"
      />
    </div>
  ) : (
    <div className="flex flex-col justify-center items-center pb-10">
      <div className="py-8 text-5xl  ">Marvel Characters</div>
      <div className="grid grid-cols-4 w-9/12 gap-12">
        {items.map((item) => (
          <CharacterItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Main;
