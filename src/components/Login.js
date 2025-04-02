import checkValidateData from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import Header from "./Header";
import {  useState } from "react";
import { auth } from "../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";
const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);

  const dispatch = useDispatch();
  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleBtnClick = () => {
    //Validate the form data

    const msg = checkValidateData(name, email, password);
    seterrorMessage(msg);

    if (msg) return; //if something in msg don't do anything otherwise

    //create new User

    if (!isSignInForm) {
      //sign up logic
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              seterrorMessage(error.message);
            });

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + errorMessage);
          // ..
        });
    } else {
      // sign in logic
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + " - " + errorMessage);
        });

      // ...
    }
  };
  return (
    <div className="h-screen">
      <img
        className="h-full w-full absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/fbf440b2-24a0-49f5-b2ba-a5cbe8ea8736/web/IN-en-20250324-TRIFECTA-perspective_d7c906ec-0531-47de-8ece-470d5061c88a_medium.jpg"
        alt="bg"
      />
      <Header />
      <div className="flex justify-center items-center h-screen ">
        <form
          onSubmit={(e) => e.preventDefault()}
          className=" z-10 bg-black w-[500px]  p-16 h-[500px] text-white rounded-3xl bg-opacity-70"
          action=""
        >
          <h1 className="font-bold text-3xl  pb-10">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 mb-7 w-full rounded-md  bg-gray-700 font-medium  bg-opacity-70"
              onChange={(e) => setName(e.target.value)}
            />
          )}

          <input
            type="email"
            placeholder="Email Address"
            className="p-3 mb-7 w-full rounded-md bg-gray-700 font-medium bg-opacity-70 "
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="p-3 mb-4 w-full rounded-md  bg-gray-700 font-medium  bg-opacity-70 "
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-red-600 p-3 font-bold">{errorMessage}</p>
          <button
            className="p-3 text-white  bg-red-600 w-full rounded-md   font-medium text-lg hover:bg-red-700"
            onClick={handleBtnClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="pt-4 cursor-pointer hover:text-blue-400"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? " New to Netflix? Sign up now."
              : "Already Registered? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
