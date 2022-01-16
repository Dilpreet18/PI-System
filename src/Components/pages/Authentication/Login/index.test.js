import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Login from ".";

it("Login with invalid length of password", async () => {
  const { getByTestId, findByTestId } = render(<Login />);
  const emailField = getByTestId("emailField").querySelector("input");
  const confirmPassword = getByTestId("confirmPasswordField").querySelector(
    "input"
  );

  userEvent.type(emailField, "nrsnghjaiswal@gmail.com");
  userEvent.type(confirmPassword, "123$wer");

  fireEvent.click(getByTestId("loginButton"));

  const errormessage = await findByTestId(
    "errorMessageconfirmPasswordField",
    2000
  );

  expect(errormessage.textContent).toBe(
    "Minimun password length must be 8 characters"
  );
});

it("Login without upperCase character of password", async () => {
  const { getByTestId, findByTestId } = render(<Login />);
  const emailField = getByTestId("emailField").querySelector("input");
  const confirmPassword = getByTestId("confirmPasswordField").querySelector(
    "input"
  );

  userEvent.type(emailField, "nrsnghjaiswal@gmail.com");
  userEvent.type(confirmPassword, "123$werw");

  fireEvent.click(getByTestId("loginButton"));

  const errormessage = await findByTestId(
    "errorMessageconfirmPasswordField",
    2000
  );

  expect(errormessage.textContent).toBe(
    "Must contain atleast one upper character"
  );
});

it("Login without lowerCase character of password", async () => {
  const { getByTestId, findByTestId } = render(<Login />);
  const emailField = getByTestId("emailField").querySelector("input");
  const confirmPassword = getByTestId("confirmPasswordField").querySelector(
    "input"
  );

  userEvent.type(emailField, "nrsnghjaiswal@gmail.com");
  userEvent.type(confirmPassword, "123$QWER");

  fireEvent.click(getByTestId("loginButton"));

  const errormessage = await findByTestId(
    "errorMessageconfirmPasswordField",
    2000
  );

  expect(errormessage.textContent).toBe(
    "Must contain atleast one lower character"
  );
});

it("Login without Special character of password", async () => {
  const { getByTestId, findByTestId } = render(<Login />);
  const emailField = getByTestId("emailField").querySelector("input");
  const confirmPassword = getByTestId("confirmPasswordField").querySelector(
    "input"
  );

  userEvent.type(emailField, "nrsnghjaiswal@gmail.com");
  userEvent.type(confirmPassword, "123Qwerw");

  fireEvent.click(getByTestId("loginButton"));

  const errormessage = await findByTestId(
    "errorMessageconfirmPasswordField",
    2000
  );

  expect(errormessage.textContent).toBe(
    "Must contain atleast one special character"
  );
});

it("Login with invalid email type", async () => {
  const { getByTestId, findByTestId } = render(<Login />);
  const emailField = getByTestId("emailField").querySelector("input");
  const confirmPassword = getByTestId("confirmPasswordField").querySelector(
    "input"
  );

  userEvent.type(emailField, "nrsnghjaiswal@gmail");
  userEvent.type(confirmPassword, "123$Qwer");

  fireEvent.click(getByTestId("loginButton"));

  const errormessage = await findByTestId("errorMessageemailField", 2000);

  expect(errormessage.textContent).toBe("Not a valid mail");
});

it("Login with valid email and password", async () => {
  const { getByTestId, findByTestId } = render(<Login />);
  const emailField = getByTestId("emailField").querySelector("input");
  const confirmPassword = getByTestId("confirmPasswordField").querySelector(
    "input"
  );

  userEvent.type(emailField, "nrsnghjaiswal@gmail.com");
  userEvent.type(confirmPassword, "123$Qwer");

  fireEvent.click(getByTestId("loginButton"));

  const errormessage = await findByTestId("errorMessageemailField", 2000);
  const errorPasswordmessage = await findByTestId(
    "errorMessageconfirmPasswordField",
    2000
  );

  expect(errormessage.textContent).toBe("");
  expect(errorPasswordmessage.textContent).toBe("");
});
