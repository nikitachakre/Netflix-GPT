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

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

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
  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b w-full  from-black z-50 flex justify-between">
      <img className="w-40" src={LOGP_URL} alt="Logo"></img>
      {user && (
        <div>
          <button
            onClick={handleSignOut}
            className="py-1 px-2 mx-1 font-medium my-4 text-white bg-red-600 text-sm rounded"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
