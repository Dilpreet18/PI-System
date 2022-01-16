import { emailRegex } from "../../constants/validation";

export const emailValidator = (email) => {
  if (!email) {
    return { message: "Field is required", error: true };
  } else {
    return emailRegex.test(email)
      ? { error: false }
      : { message: "Not a valid mail", error: true };
  }
};
