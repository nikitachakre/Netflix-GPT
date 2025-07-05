import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";

const useUpcomingMovies = () => {
    const disptach = useDispatch();
    const upcomingMovies = useSelector((store) => store.movies.upcomingMovies);
    
    const getUpcomingMovies = async() => {
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", API_OPTIONS);
        const json = await data.json();
        // console.log(json.results);
        disptach(addUpcomingMovies(json.results));
    };

    useEffect(() => {
        !upcomingMovies && getUpcomingMovies(); //if upcoming movies are present in store then don't make api calls
    }, []);
}
export default useUpcomingMovies;