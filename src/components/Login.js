import checkValidateData from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import Header from "./Header";
import { useRef, useState } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);
  const navigate = useNavigate();
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
            photoURL:
              "https://media.istockphoto.com/id/1142192548/vector/man-avatar-profile-male-face-silhouette-or-icon-isolated-on-white-background-vector.jpg?s=612x612&w=is&k=20&c=F3b3PaWVe3fW-LMQNptQq_DS44UnVk4TJS4nxSWHsxI=",
          })
            .then(() => {
              const {uid, email, displayName, photoURL} = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              seterrorMessage(error.message);
            });

          console.log(user);

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
          console.log(user);
          navigate("/browse");

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
