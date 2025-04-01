import React from "react";
import {  signOut } from "firebase/auth";
import {auth} from "../utils/firebase"
import {useNavigate} from "react-router"
import {useSelector} from "react-redux"

const Header = () => {
  const navigate = useNavigate()
  const user = useSelector(store => store.user);
  console.log (user)
  const handleSignOut= () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      
      navigate("/")
    }).catch((error) => {
      // An error happened.
      
    });
  }
  return (
    <div className="absolute bg-gradient-to-b from-black z-10 flex justify-between w-screen">
      <img
        className="w-36"
        src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Logo"
      />
      {user &&(
      <div className="flex p-3">
        <img
          className="rounded-lg  w-10 h-10"
          src={user.photoURL}
          
        />

        <button className="font-bold text-white pl-3" onClick={handleSignOut}>
          Sign Out
        </button>
        
      </div>
      )}
    </div>
  );
};

export default Header;
