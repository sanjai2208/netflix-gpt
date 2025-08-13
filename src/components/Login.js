import checkValidateData from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import Header from "./Header";
import { useState } from "react";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { USER_AVATAR } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);

  const dispatch = useDispatch();
  const toggleSignInForm = () => setisSignInForm(!isSignInForm);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleBtnClick = () => {
    const msg = checkValidateData(name, email, password);
    seterrorMessage(msg);
    if (msg) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
            })
            .catch((error) => seterrorMessage(error.message));
        })
        .catch((error) =>
          seterrorMessage(error.code + " - " + error.message)
        );
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Success
        })
        .catch((error) =>
          console.log(error.code + " - " + error.message)
        );
    }
  };

  return (
    <div className="h-screen relative">
      <img
        className="h-full w-full object-cover absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/fbf440b2-24a0-49f5-b2ba-a5cbe8ea8736/web/IN-en-20250324-TRIFECTA-perspective_d7c906ec-0531-47de-8ece-470d5061c88a_medium.jpg"
        alt="bg"
      />
      <Header />
      <div className="flex justify-center items-center h-screen px-4">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="z-10 bg-black bg-opacity-70 w-[90%] sm:w-[500px] p-8 sm:p-16 rounded-3xl text-white"
        >
          <h1 className="font-bold text-2xl sm:text-3xl pb-8 sm:pb-10">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-3 mb-5 sm:mb-7 w-full rounded-md bg-gray-700 font-medium bg-opacity-70"
              onChange={(e) => setName(e.target.value)}
            />
          )}

          <input
            type="email"
            placeholder="Email Address"
            className="p-3 mb-5 sm:mb-7 w-full rounded-md bg-gray-700 font-medium bg-opacity-70"
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="p-3 mb-3 sm:mb-4 w-full rounded-md bg-gray-700 font-medium bg-opacity-70"
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="text-red-600 p-2 sm:p-3 font-bold">{errorMessage}</p>

          <button
            className="p-3 text-white bg-red-600 w-full rounded-md font-medium text-base sm:text-lg hover:bg-red-700"
            onClick={handleBtnClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p
            className="pt-4 cursor-pointer hover:text-blue-400 text-sm sm:text-base"
            onClick={toggleSignInForm}
          >
            {isSignInForm
              ? "New to Netflix? Sign up now."
              : "Already Registered? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

