"use server";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

import { z } from "zod";
// login is mentioned in useStateAction hook in LoginComp
// prevState holds the prevState of the form
export default async function Login(prevState, formData) {
  console.log(formData);
  const username = formData.get("name");
  const password = formData.get("password");
  // For validation we can use either if consitions (a lot of conditions), or regEx. But
  // the better way is to use zod library
  // It requires to be define the structure of the data (called schema) to be validated
  const schema = z.object({
    username: z.string().min(1, { message: "Du skal udfyld brugernavn" }),
    password: z.string().min(1, { message: "Du skal udfyld et password" }),
  });
  const validate = schema.safeParse({
    username,
    password,
  });

  if (!validate.success) {
    return {
      formData: {
        username,
        password,
      },
      errors: validate.error.format(),
    };
  }

  try {
    const response = await fetch(`http://localhost:4000/auth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    console.log(response.status);

    // Error handling
    if (response.status === 401) {
      // bad request
      return {
        formData: {
          username,
          password,
        },
        Error: "Forkert brugernavn eller password",
      };
    }

    const data = await response.json();
    const cookieStore = await cookies();
    cookieStore.set("cookieRole", data.role);
    cookieStore.set("cookieToken", data.token, { maxAge: 60 * 60 * 24 });
    cookieStore.set("cookieUserId", data.userId);
  } catch (error) {}
  redirect("/activities");
}
