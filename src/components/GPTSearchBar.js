import React from "react";
import lang from "../utils/LanguageContants";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="bg-black w-1/2 grid grid-cols-12 bg-opacity-80">
        <input
          type="text"
          placeholder={lang[langKey].gptSearchPlaceHolder}
          className="px-4 py-2 m-4 col-span-9 rounded-sm"
        ></input>
        <button className="py-2 px-4 m-4 text-white bg-red-600 rounded-sm col-span-3 font-medium">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GPTSearchBar;
