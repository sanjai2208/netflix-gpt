import Header from "./Header";
import { useState } from "react";
const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="flex justify-center ">
        <form
          className=" absolute bg-black w-[500px]  p-16  mt-[300px] text-white rounded-3xl bg-opacity-70"
          action=""
        >
          <h1 className="font-bold text-3xl  pb-10">{isSignInForm ? "Sign In" : "Sign Up"}</h1>

          {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-3 mb-7 w-full rounded-md  bg-gray-700 font-medium  bg-opacity-70"
          />)
          } 

          <input
            type="email"
            placeholder="Email Address"
            className="p-3 mb-7 w-full rounded-md bg-gray-700 font-medium bg-opacity-70 "
          />
          

          <input
            type="password"
            placeholder="Password"
            className="p-3 mb-7 w-full rounded-md  bg-gray-700 font-medium  bg-opacity-70"
          />
          <button className="p-3 text-white  bg-red-600 w-full rounded-md   font-medium text-lg hover:bg-red-700">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="pt-4 cursor-pointer hover:text-blue-400" onClick={toggleSignInForm}>
          {isSignInForm ? " New to Netflix? Sign up now." : "Already Registered? Sign In Now"}
           
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
