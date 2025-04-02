import React ,{useEffect}from "react";
import {onAuthStateChanged,  signOut } from "firebase/auth";
import {auth} from "../utils/firebase"
import {useNavigate} from "react-router"
import {useSelector} from "react-redux"
import { useDispatch } from "react-redux";
import { addUser,removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  
  const navigate = useNavigate()
  const user = useSelector(store => store.user);

  
 
  const dispatch = useDispatch();
  const handleSignOut= () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      
      
    }).catch((error) => {
      // An error happened.
      
    });
  } 
  useEffect(() => {
    
    const unsubscribe=onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}))
        
        
        navigate("/browse")
        
        // ...
      } else {
        // User is signed out

        dispatch(removeUser())
        navigate("/")

        

        // ...
      }
    });
    return ()=> unsubscribe();
  }, []);
  
 
  return (
    <div className="absolute bg-gradient-to-b from-black z-10 flex justify-between w-screen">
      <img
        className="w-36"
        src={LOGO}
        alt="Logo"
      />
      {user &&(
      <div className="flex p-3">
        
        
        <img
       
          className=" rounded-lg  w-10 h-10 hover:relative  "
          src={user.photoURL}/>
          
          
           
          
           

        
       
          
        

        <button className="font-bold text-white pl-3" onClick={handleSignOut}>
          Sign Out
        </button>
        
      </div>
      )}
    </div>
  );
};

export default Header;
