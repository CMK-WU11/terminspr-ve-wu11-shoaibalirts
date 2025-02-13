"use client";
import { useActionState, useEffect } from "react";
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

  const myToken = Cookies.get("cookieToken");
  // console.log("myToken in LoginComp: ", myToken);
  if (myToken === undefined) {
    // console.log("user is not logged in"); // it worked
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
        className="bg-white px-16 py-4 placeholder:text-black"
        // required
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
        // required
      />
      <div className="text-red-700">
        {formState?.errors?.password?._errors[0]}
      </div>
      <div className="text-red-700">{formState?.Error}</div>
      <div className="py-8">
        <button
          disabled={isPending}
          className="bg-white px-16 py-4 placeholder:text-black"
        >
          {isPending ? "Logger ind..." : "Log ind"}
        </button>
      </div>
    </form>
  );
}
