"use client";
import { getToken } from "@/lib/apilandrupdans";
import { useState } from "react";

export default function LoginComp() {
  const [enteredValues, setEnteredValues] = useState({
    name: "",
    password: "",
  });
  async function handleSubmission(e) {
    // console.log(enteredValues.name);
    // console.log(enteredValues.password);

    e.preventDefault();
    const data = await getToken(enteredValues);
    console.log("Data: ", data);
  }

  function handleInputChange(eventEmitterElement, value) {
    setEnteredValues((prevValues) => {
      return {
        ...prevValues,
        [eventEmitterElement]: value,
      };
    });
  }
  return (
    <form className="bg-grayish text-black w-[100vw] opacity-75 flex flex-col items-center justify-center space-y-4">
      <h1 className="font-ubuntu text-5xl">Log ind</h1>
      <input
        type="text"
        name="name"
        placeholder="brugernavn"
        onChange={(event) => handleInputChange("name", event.target.value)}
        value={enteredValues.name}
        className="bg-white px-16 py-4 placeholder:text-black"
        // required
      />

      <input
        type="password"
        name="password"
        placeholder="adgangskode"
        className="bg-white px-16 py-4 placeholder:text-black"
        onChange={(event) => handleInputChange("password", event.target.value)}
        value={enteredValues.password}
        // required
      />
      <div className="py-8">
        <button
          onClick={handleSubmission}
          className="bg-white px-16 py-4 placeholder:text-black"
        >
          Log ind
        </button>
      </div>
    </form>
  );
}
