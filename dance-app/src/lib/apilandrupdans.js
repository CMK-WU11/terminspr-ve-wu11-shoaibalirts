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
