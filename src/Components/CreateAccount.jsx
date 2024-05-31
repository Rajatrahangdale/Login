/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import resigsterImg from "../assets/auth-v2-register.png";
const CreateAccount = ({val, setVal}) => {
  return (
    <>
      <div className="bg-zinc-200 h-screen w-full flex items-center justify-around gap-10">
        <div className="bg-zinc-400 w-[600px] h-[600px] rounded-lg">
          <img
            src={resigsterImg}
            className="w-full h-full object-scale-down"
            alt=""
          />
        </div>
        <div className="w-[400px] h-[400px] text-black">
          <h1 className="text-5xl font-bold">Keek</h1>
          <h2 className="opacity-75 my-2 text-2xl font-semibold">
            Adventure starts here 🚀
          </h2>
          <p className="mb-4">
            Make your app management easy and fun!
          </p>
          <div>
            {val ? (
              <div>
                <h4 className="font-semibold text-zinc-800">Email</h4>
                <input
                  type="email"
                  className="w-full bg-transparent rounded-md border border-black px-2 py-1 focus:outline-none focus:border-sky-500 focus:invalid:border-red-500"
                  placeholder="admin@vaexy.com"
                />
              </div>
            ) : (
              <div>
                <h4 className="font-semibold text-zinc-800">Mobile</h4>
                <input
                  type="number"
                  className="w-full bg-transparent rounded-md border border-black px-2 py-1 focus:outline-none focus:border-sky-500 focus:invalid:border-red-500"
                  placeholder="mobile number"
                />
              </div>
            )}
          </div>
          <div className="my-4">
            <h2 className="text-md text-red-500 font-semibold">
              <button onClick={() => setVal(!val)}>
                {val ? "Continue with phone" : "Continue with email"}
              </button>
            </h2>
          </div>
          <div className="bg-zinc-400 text-center rounded-md  active:bg-red-600 active:translate-x-1 border">
            <button className="opacity-75 font-semibold w-full py-2 ">
              Next &gt;{" "}
            </button>
          </div>
          <div className="text-zinc-400 font-semibold my-4 text-center">
            <h2 className="inline text-zinc-800 font-semibold">
              Already have an account?{" "}
            </h2>
            <button className="text-red-500 active:text-red-600">
              <Link to="/">Sign in instead</Link>
            </button>
          </div>
          <div className="text-center text-zinc-400">
            <h2>-------------------- or ---------------------</h2>
          </div>
          <div className="text-center my-2 border border-black rounded-lg active:bg-red-500 active:border-white">
            <button className="text-zinc-700 w-full border bg-transparent py-2  font-semibold rounded-md active:bg-red-500">
              Continue With Google
            </button>
          </div>
          <div className="bg-transparent text-center border border-black rounded-lg active:bg-red-500 active:border-white">
            <button className="text-zinc-700 w-full py-2 border rounded-md font-semibold active:bg-red-500">
              Continue With Facebook
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAccount;
