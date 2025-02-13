"use server";
import { cookies } from "next/headers";
// import { redirect } from "next/navigation";

export async function getActivities() {
  try {
    const response = await fetch("http://localhost:4000/api/v1/activities");
    const data = await response.json();
    console.log("All Activities: ", data);

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

export async function getUserDataAsPerUserId(id) {
  const cookieStore = await cookies();
  const cookieToken = cookieStore.get("cookieToken");
  // console.log(cookieToken.value);

  try {
    const response = await fetch(`http://localhost:4000/api/v1/users/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${cookieToken.value}`,
      },
    });
    const data = await response.json();
    // console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
}

/////////////////////////
export async function addThisUserToActivity(userId, activityId) {
  const cookieStore = await cookies();
  const cookieToken = cookieStore.get("cookieToken");
  // console.log(cookieToken.value);

  try {
    const response = await fetch(
      `http://localhost:4000/api/v1/users/${userId}/activities/${activityId}`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${cookieToken.value}`,
        },
      }
    );
    const data = await response.json();
    // console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
}

/////////////////////////
export async function deleteThisUserFromThisActivity(userId, activityId) {
  const cookieStore = await cookies();
  const cookieToken = cookieStore.get("cookieToken");
  // console.log(cookieToken.value);

  try {
    const response = await fetch(
      `http://localhost:4000/api/v1/users/${userId}/activities/${activityId}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${cookieToken.value}`,
        },
      }
    );
    const data = await response.json();
    // console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
}
