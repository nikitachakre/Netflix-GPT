import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { LOGP_URL } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGS } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGPTSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b w-full  from-black z-50 flex justify-between">
      <img className="w-40" src={LOGP_URL} alt="Logo"></img>
      {user && (
        <div>
          {showGptSearch && (
            <select
              className="px-2 py-1 m-2 text-red-800 font-medium rounded-sm cursor-pointer"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGS.map((lang) => (
                <option value={lang.identifier} key={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="text-white px-2 py-1 bg-red-600 text-sm rounded font-medium mr-2"
            onClick={handleGPTSearchClick}
          >
           {showGptSearch ? <>Home <i className="fa fa-home" aria-hidden="true"></i></> : <> GPTSearch <i class="fa fa-search" aria-hidden="true"></i></>} 
          </button>
          <button
            onClick={handleSignOut}
            className="py-1 px-2 mx-1 font-medium my-4 text-white bg-red-600 text-sm rounded"
          >
            Sign Out <i class="fa fa-sign-out" aria-hidden="true"></i>
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
