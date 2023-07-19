import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(e) {
    e.preventDefault();
    try {
      await axios.post("/login", { email, password });
      alert("Login Successfully");
    } catch (error) {
      alert("login failed!");
    }
  }

  return (
    <div className="mt-6 min-h-screen flex justify-center items-center  ">
      <div className="flex-col mb-64 ">
        <h1 className=" text-4xl text-center mb-4">Login</h1>
        <form
          action=""
          className="mx-auto max-w-md flex-row"
          onSubmit={loginUser}
        >
          <input
            className="w-full border rounded-full my-1 py-2 px-4"
            type="email"
            placeholder="xyz@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="w-full border rounded-full my-1 py-2 px-4"
            type="passwoed"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login w-full bg-green-500 text-white rounded-lg py-2 my-2">
            Login
          </button>
          <div className="text-center  text-gray-500">
            Not on Hoardinger?
            <Link className=" underline text-black" to={"/register"}>
              Register Now!
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
