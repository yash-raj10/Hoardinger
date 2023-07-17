import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function registerUser(e) {
    e.preventDefault();

    // axios.get("http://localhost:5000/test");
    axios.post("/register", {
      name,
      email,
      password,
    });
  }

  return (
    <div className="mt-6 min-h-screen flex justify-center items-center  ">
      <div className="flex-col mb-64 ">
        <h1 className=" text-4xl text-center mb-4">Register</h1>
        <form
          action=""
          className="mx-auto max-w-md flex-row"
          onSubmit={registerUser}
        >
          <input
            className="w-full border rounded-full my-1 py-2 px-4"
            type="text"
            placeholder="Yash"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
            Register
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
