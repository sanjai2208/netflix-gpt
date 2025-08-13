import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { toggleMovieInfoView } from "../utils/moviesSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const showMovieInfoPage = useSelector((store) => store.movies.showMoviePage);

  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth).catch((error) => {
      console.error("Sign-out error:", error);
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleMoviePage = () => {
    dispatch(toggleMovieInfoView());
  };

  return (
    <div className="absolute bg-gradient-to-b from-black z-10 flex justify-between w-screen items-center px-4 py-2">
      <img
        className="w-24 sm:w-36"
        src={LOGO}
        alt="Logo"
      />
      {user && (
        <div className="flex items-center space-x-2 sm:space-x-4 p-2 sm:pr-7">
          {showMovieInfoPage ? (
            <button
              className="py-1 px-2 sm:py-2 sm:px-4 text-xs sm:text-sm text-white bg-purple-600 rounded-lg hover:scale-x-110 duration-200 hover:bg-purple-700"
              onClick={handleMoviePage}
            >
              Home Page
            </button>
          ) : (
            <button
              className="py-1.5 px-3 sm:py-2 sm:px-4 text-xs sm:text-sm text-white bg-purple-600 rounded-lg hover:scale-x-110 duration-200 hover:bg-purple-700"
              onClick={handleGptSearchClick}
            >
              {showGptSearch ? "Home Page" : "GPT Search"}
            </button>
          )}
          <img
            className="w-8 h-8 sm:w-12 sm:h-12 rounded-lg"
            src={user.photoURL}
            alt="User"
          />
          <button
            className="font-bold text-xs sm:text-xl text-white  sm:pl-3"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;

