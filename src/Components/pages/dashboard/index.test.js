import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Dashboard from ".";

it("click on logout button", () => {
  const { getByTestId } = render(<Dashboard />);
  const logoutButton = getByTestId("logoutButton");
  expect(logoutButton.textContent).toBe("Logout");
  userEvent.click(logoutButton);
});
