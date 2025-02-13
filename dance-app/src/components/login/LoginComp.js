"use client";
import { getAuthorization, getAuthorizationData } from "@/lib/apilandrupdans";

import { useActionState, useEffect, useState } from "react";
import Cookies from "js-cookie";
import Login from "@/actions/login"; // it is called when we submit the button because it is mentioned in action attribute of the fom

export default function LoginComp() {
  const [formState, formAction, isPending] = useActionState(Login, null);
  useEffect(
    function () {
      console.log("formState: ", formState);
    },
    [formState]
  );
  const [enteredValues, setEnteredValues] = useState({
    name: "",
    password: "",
  });
  const myToken = Cookies.get("cookieToken");
  // console.log("myToken in LoginComp: ", myToken);
  if (myToken === undefined) {
    // console.log("user is not logged in"); // it worked
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
    <form
      action={formAction}
      noValidate
      className="bg-grayish text-black w-[100vw] opacity-75 flex flex-col items-center justify-center space-y-4"
    >
      <h1 className="font-ubuntu text-5xl">Log ind</h1>
      <input
        defaultValue={formState?.formData?.username}
        type="text"
        name="name"
        placeholder="brugernavn"
        onChange={(event) => handleInputChange("name", event.target.value)}
        value={enteredValues.name}
        className="bg-white px-16 py-4 placeholder:text-black"
        required
      />
      <div className="text-red-700">
        {formState?.errors?.username?._errors[0]}
      </div>
      <input
        defaultValue={formState?.formData?.password}
        type="password"
        name="password"
        placeholder="adgangskode"
        className="bg-white px-16 py-4 placeholder:text-black"
        onChange={(event) => handleInputChange("password", event.target.value)}
        value={enteredValues.password}
        required
      />
      <div className="text-red-700">
        {formState?.errors?.password?._errors[0]}
      </div>
      {/* <div className="text-red-700">{formState?.error}</div> */}
      <div className="py-8">
        <button
          disabled={isPending}
          // onClick={handleSubmission}
          className="bg-white px-16 py-4 placeholder:text-black"
        >
          {isPending ? "Logger ind..." : "Log ind"}
        </button>
      </div>
    </form>
  );
}
