"use server";
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

  //   if (!username.length || password.length) {
  //     return { error: "du skal udfyld begge felter" };
  //   }
}
