import { Link } from "react-router-dom";

export default function RegisterPage() {
  return (
    <div className="mt-6 min-h-screen flex justify-center items-center  ">
      <div className="flex-col mb-64 ">
        <h1 className=" text-4xl text-center mb-4">Register</h1>
        <form action="" className="mx-auto max-w-md flex-row">
          <input
            className="w-full border rounded-full my-1 py-2 px-4"
            type="email"
            placeholder="xyz@gmail.com"
          />
          <input
            className="w-full border rounded-full my-1 py-2 px-4"
            type="passwoed"
            placeholder="password"
          />
          <button className="login w-full bg-green-500 text-white rounded-lg py-2 my-2">
            Login
          </button>
          <div className="text-center  text-gray-500">
            Already a member?
            <Link className=" underline text-black" to={"/login"}>
              Login Now!
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
