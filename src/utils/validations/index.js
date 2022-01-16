import { emailValidator } from "./emailValidation";
import { passwordValidator } from "./passwordValidation";

export const signUpValidator = (details) => {
  const error = {};
  error.email = emailValidator(details?.email);
  error.password = passwordValidator(details?.password);
  error.confirmPassword = passwordValidator(details?.confirmPassword);
  const validStatus = Object.keys(error).some(
    (key) => error[key].error === true
  );
  return { error, isValid: !validStatus };
};

export const loginValidator = (details) => {
  const error = {};
  error.email = emailValidator(details?.email);
  error.password = passwordValidator(details?.password);
  const validStatus = Object.keys(error).some(
    (key) => error[key].error === true
  );
  return { error, isValid: !validStatus };
};
