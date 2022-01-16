import {
  oneLowerCharacter,
  oneUpperCharacter,
  oneSpecialSymbol,
  oneDigit,
} from "../../constants/validation";

export const passwordValidator = (value) => {
  const isOneLowerCharacter = oneLowerCharacter.test(value);
  const isOneUpperCharacter = oneUpperCharacter.test(value);
  const isOneSpecialSymbol = oneSpecialSymbol.test(value);
  const isOneDigit = oneDigit.test(value);
  const error = {};

  if (!value) {
    error.password = "Field is required";
  } else if (value.length < 8) {
    error.password = "Minimun password length must be 8 characters";
  } else if (!isOneLowerCharacter) {
    error.password = "Must contain atleast one lower character";
  } else if (!isOneUpperCharacter) {
    error.password = "Must contain atleast one upper character";
  } else if (!isOneSpecialSymbol) {
    error.password = "Must contain atleast one special character";
  } else if (!isOneDigit) {
    error.password = "Must contain atleast one number";
  }

  return error.password
    ? { message: error.password, error: true }
    : { error: false };
};

export default passwordValidator;
