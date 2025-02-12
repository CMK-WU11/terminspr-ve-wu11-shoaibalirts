"use client";
import { getAuthorization, getAuthorizationData } from "@/lib/apilandrupdans";
import { useState } from "react";
import Cookies from "js-cookie";

export default function LoginComp() {
  const [enteredValues, setEnteredValues] = useState({
    name: "",
    password: "",
  });
  const myToken = Cookies.get("cookieToken");
  console.log("myToken in LoginComp: ", myToken);
  if (myToken === undefined) {
    console.log("user is not logged in"); // it worked
  }
  async function handleSubmission(e) {
    // required client side validation
    e.preventDefault();
    const data = await getAuthorizationData(enteredValues);
    console.log("Authoration Success/Unsuccessful: ", data);
    if (data === "success") {
      // use brear token to send new request to api and get new data and render another component
    }
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
