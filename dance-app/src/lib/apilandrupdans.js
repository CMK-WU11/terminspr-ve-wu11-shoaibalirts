"use server";
import { cookies } from "next/headers";
export async function getActivities() {
  try {
    const response = await fetch("http://localhost:4000/api/v1/activities");
    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getFitnessActivity(id) {
  try {
    const response = await fetch(
      `http://localhost:4000/api/v1/activities/${id}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
export async function getAuthorizationData(enteredValues) {
  // console.log(enteredValues);
  // required server side validation using zod library
  try {
    const response = await fetch(`http://localhost:4000/auth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: enteredValues.name,
        password: enteredValues.password,
      }),
    });

    const data = await response.json();
    console.log(data);
    if (!response.ok) {
      return "unsuccessful";
    } else {
      const cookieStore = await cookies();
      cookieStore.set("cookieRole", data.role);
      cookieStore.set("cookieToken", data.token);
      cookieStore.set("cookieUserId", data.userId);
      return "success";
    }
    // return data;
  } catch (error) {
    console.log(error);
  }
}
