"use server";

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
export async function getToken(enteredValues) {
  // console.log(enteredValues);

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

    return data;
  } catch (error) {
    console.log(error);
  }
}
