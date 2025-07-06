import React, { useRef } from "react";
import lang from "../utils/LanguageContants";
import { useDispatch, useSelector } from "react-redux";
import { GEMINI_API_URL } from "../utils/constants";
import { GEMINI_API_REQ } from "../utils/constants";
import { API_OPTIONS } from "../utils/constants";
import { addGptMoviesResults, clearMoviesResults } from "../utils/gptSlice";

const GPTSearchBar = () => {
  const searchText = useRef(null);
  const langKey = useSelector((store) => store.config.lang);
  const dispatch = useDispatch();
  const { movieNames, movieInfo} = useSelector((store) => store.gpt);

  //search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  const handleClearClick = () =>{
    dispatch(clearMoviesResults());
  }

  const handleGPTSearchClick = async () => {
    // console.log(searchText.current.value);
    // Make GPT api call to get movies result
    const gptQuery =
      "Act as Movie Recommandation sytem and give suggetions some movies for the query" +
      searchText.current.value +
      "Movies suggestion come up with movies name with separated commas like example given ahead. example: koi mil gaya,Manmarziyaan and only give 5 movies name";
    try {
      const gptResults = await fetch(GEMINI_API_URL, {
        ...GEMINI_API_REQ,
        body: JSON.stringify({
          contents: [
            {
              parts: [{ text: gptQuery }],
            },
          ],
        }),
      });
      const data = await gptResults.json();
      // console.log(data);
      if (data && data.candidates && data.candidates[0]) {
        const gptMovies = data.candidates[0].content.parts[0].text;
        // console.log (gptMovies);
        const gptMoviesArray = gptMovies.split(","); // split convert the movies name in array
        console.log(gptMoviesArray);
        //for each movie i will search TMDB api
        const promiseArray = gptMoviesArray.map((movie) =>
          searchMovieTMDB(movie)
        ); // it will return 5 promises
        const tmdbResults = await Promise.all(promiseArray);
        console.log(tmdbResults);

        dispatch(
          addGptMoviesResults({ movieNames: gptMoviesArray, movieInfo: tmdbResults })
        );
      } else {
        return "No response from Gemini";
      }
    } catch (error) {
      console.error("Gemini API Error:", error);
    }
    searchText.current.value ="";
  };

  return (
    <div className="pt-[40%] md:pt-[10%] flex justify-center">
      <form
        className="bg-black w-full md:w-1/2 grid grid-cols-12 bg-opacity-90"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder={lang[langKey].gptSearchPlaceHolder}
          className="px-4 py-2 m-4 col-span-8 md:col-span-9 rounded-sm"
        ></input>
        <button
          className="py-2 px-4 m-4 text-white bg-red-600 rounded-sm col-span-4 md:col-span-3 font-medium"
          onClick={handleGPTSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
      {
         movieInfo && movieInfo.length > 0 && <div className="bg-black bg-opacity-90">
           <button className="py-2 px-3 md:px-6 m-4 text-white bg-red-600 rounded-sm font-medium" onClick={handleClearClick}>Clear</button>
        </div>
      }
      
    </div>
  );
};

export default GPTSearchBar;
