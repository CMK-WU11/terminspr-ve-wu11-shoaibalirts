"use server";
// import { redirect } from "next/navigation";

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
/*
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
        username,
        password,
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
      // redirect("/activities");

      // return "success";
    }
    // return data;
  } catch (error) {
    throw new Error(error);
  }
   
}
 */
// Single user data
export async function getUserData(userId) {
  const cookieStore = await cookies();
  const myToken = cookieStore.get("cookieToken");

  if (!myToken) {
    console.log("No token found in cookies.");
    return null;
  }
  if (!userId) {
    console.log("No useId found in cookies.");
    return null;
  }

  try {
    const response = await fetch(
      `http://localhost:4000/api/v1/users/${userId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${myToken.value}`,
        },
      }
    );

    if (!response.ok) {
      console.log(`Request failed with status: ${response.status}`);
      const errorData = await response.json();
      console.log("Error response data:", errorData);
      return null;
    }

    const data = await response.json();
    console.log("User data: ", data);
    return data;
  } catch (error) {
    console.log("Error occurred while fetching the current user:", error);
    return null;
  }
}
