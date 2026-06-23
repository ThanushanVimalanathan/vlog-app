"use client";

import React, { useState } from "react";

import axios from "axios";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  const [currentState, setCurrentState] = useState("Login");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:4000";

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      if (currentState === "Sign Up") {
        const response = await axios.post(
          `${BACKEND_URL}/api/user/register`,
          { name, email, password }
        );

        console.log("Register:", response.data);
      } else {
        const response = await axios.post(
          `${BACKEND_URL}/api/user/login`,
          { email, password }
        );

        console.log("Login:", response.data);

        // ✅ NAVIGATE ON SUCCESS
        if (response.data.success) {
          router.push("/Job");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-700 mt-50"
    >
      {/* Title */}
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="text-3xl font-semibold">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>

      {/* Name */}
      {currentState !== "Login" && (
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Name"
          required
        />
      )}

      {/* Email */}
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
        required
      />

      {/* Password */}
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
        required
      />

      {/* Toggle */}
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot Your Password?</p>

        {currentState === "Login" ? (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer"
          >
            Create Account
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer"
          >
            Login Here
          </p>
        )}
      </div>

      {/* Button */}
      <button
        type="submit"
        className="bg-black text-white font-light px-8 py-2 mt-4"
      >
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default page;