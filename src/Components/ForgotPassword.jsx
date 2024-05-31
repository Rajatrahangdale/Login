import { Link } from "react-router-dom";
import ForgotPass from "../assets/auth-v2-forgot-password.png";
const ForgotPassword = () => {
  return (
    <>
      <div className="bg-zinc-200 h-screen w-full flex items-center justify-around gap-10">
        <div className="bg-zinc-400 w-[600px] h-[600px] rounded-lg">
          <img
            src={ForgotPass}
            className="w-full h-full object-scale-down"
            alt=""
          />
        </div>
        <div className="w-[400px] h-[400px] text-black">
          <h1 className="text-5xl font-bold my-6">Keek</h1>
          <p className="opacity-75 text-3xl font-bold my-2">Forgot Password?</p>
          <p className="opacity-75 my-4">
            Enter your email and we′ll send you instructions to reset your
            password
          </p>
          <div>
            <h4 className="text-zinc-800 font-semibold">Email</h4>
            <input
              type="email"
              className="w-full bg-transparent rounded-md border border-black px-2 py-1 focus:outline-none focus:border-sky-500 focus:invalid:border-red-500"
              placeholder="Email"
            />
          </div>

          <div className="bg-zinc-400 text-center rounded-md border my-4 active:bg-red-500 active:translate-x-1">
            <button className="opacity-50 w-full py-2 rounded-md ">
              Send reset link
            </button>
          </div>
          <div className="bg-transparent text-center py-2">
            <button className="text-red-500 active:text-red-700 font-semibold ">
              <Link to="/">&lt; Back to Login </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
