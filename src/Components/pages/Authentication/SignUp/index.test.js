import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SignUp from ".";

it("sign up with invalid length of password", async () => {
  const { getByTestId, findByTestId } = render(<SignUp />);
  const emailField = getByTestId("emailField").querySelector("input");
  const passwordField = getByTestId("passwordField").querySelector("input");
  const confirmPassword = getByTestId("confirmPasswordField").querySelector(
    "input"
  );

  userEvent.type(emailField, "nrsnghjaiswal@gmail.com");
  userEvent.type(passwordField, "123$Qwer");
  userEvent.type(confirmPassword, "123$wer");

  fireEvent.click(getByTestId("SignUpButton"));

  const errormessage = await findByTestId(
    "errorMessageconfirmPasswordField",
    2000
  );

  expect(errormessage.textContent).toBe(
    "Minimun password length must be 8 characters"
  );
});

it("sign up without upperCase character of password", async () => {
  const { getByTestId, findByTestId } = render(<SignUp />);
  const emailField = getByTestId("emailField").querySelector("input");
  const passwordField = getByTestId("passwordField").querySelector("input");
  const confirmPassword = getByTestId("confirmPasswordField").querySelector(
    "input"
  );

  userEvent.type(emailField, "nrsnghjaiswal@gmail.com");
  userEvent.type(passwordField, "123$Qwer");
  userEvent.type(confirmPassword, "123$werw");

  fireEvent.click(getByTestId("SignUpButton"));

  const errormessage = await findByTestId(
    "errorMessageconfirmPasswordField",
    2000
  );

  expect(errormessage.textContent).toBe(
    "Must contain atleast one upper character"
  );
});

it("sign up without lowerCase character of password", async () => {
  const { getByTestId, findByTestId } = render(<SignUp />);
  const emailField = getByTestId("emailField").querySelector("input");
  const passwordField = getByTestId("passwordField").querySelector("input");
  const confirmPassword = getByTestId("confirmPasswordField").querySelector(
    "input"
  );

  userEvent.type(emailField, "nrsnghjaiswal@gmail.com");
  userEvent.type(passwordField, "123$Qwer");
  userEvent.type(confirmPassword, "123$QWER");

  fireEvent.click(getByTestId("SignUpButton"));

  const errormessage = await findByTestId(
    "errorMessageconfirmPasswordField",
    2000
  );

  expect(errormessage.textContent).toBe(
    "Must contain atleast one lower character"
  );
});

it("sign up without Special character of password", async () => {
  const { getByTestId, findByTestId } = render(<SignUp />);
  const emailField = getByTestId("emailField").querySelector("input");
  const passwordField = getByTestId("passwordField").querySelector("input");
  const confirmPassword = getByTestId("confirmPasswordField").querySelector(
    "input"
  );

  userEvent.type(emailField, "nrsnghjaiswal@gmail.com");
  userEvent.type(passwordField, "123$Qwer");
  userEvent.type(confirmPassword, "123Qwerw");

  fireEvent.click(getByTestId("SignUpButton"));

  const errormessage = await findByTestId(
    "errorMessageconfirmPasswordField",
    2000
  );

  expect(errormessage.textContent).toBe(
    "Must contain atleast one special character"
  );
});

it("Sign up with invalid email type", async () => {
  const { getByTestId, findByTestId } = render(<SignUp />);
  const emailField = getByTestId("emailField").querySelector("input");
  const passwordField = getByTestId("passwordField").querySelector("input");
  const confirmPassword = getByTestId("confirmPasswordField").querySelector(
    "input"
  );

  userEvent.type(emailField, "nrsnghjaiswal@gmail");
  userEvent.type(passwordField, "123$Qwer");
  userEvent.type(confirmPassword, "123$Qwer");

  fireEvent.click(getByTestId("SignUpButton"));

  const errormessage = await findByTestId("errorMessageemailField", 2000);

  expect(errormessage.textContent).toBe("Not a valid mail");
});
