import { render, screen, fireEvent } from "@testing-library/react";
import Register from "./register";

describe("Register component", () => {
  test("should render registration form", () => {
    render(<Register />);

    // Check if the registration form elements are rendered
    expect(screen.getByText("Registration Form")).toBeInTheDocument();
    expect(screen.getByLabelText("Email:")).toBeInTheDocument();
    expect(screen.getByLabelText("Password:")).toBeInTheDocument();
    expect(screen.getByLabelText("Role:")).toBeInTheDocument();
    expect(screen.getByText("Register")).toBeInTheDocument();
  });

  test("should update state when input values change", () => {
    render(<Register />);

    // Simulate user input by changing the input values
    fireEvent.change(screen.getByLabelText("Email:"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByLabelText("Password:"), {
      target: { value: "password123" },
    });
    fireEvent.change(screen.getByLabelText("Role:"), {
      target: { value: "vendor" },
    });

    // Check if the state values are updated correctly
    expect(screen.getByLabelText("Email:")).toHaveValue("test@example.com");
    expect(screen.getByLabelText("Password:")).toHaveValue("password123");
    expect(screen.getByLabelText("Role:")).toHaveValue("vendor");
  });

  test("should call handleRegister function when Register button is clicked", () => {
    const handleRegisterMock = jest.fn();
    render(<Register handleRegister={handleRegisterMock} />);

    // Simulate user click on the Register button
    fireEvent.click(screen.getByText("Register"));

    // Check if the handleRegister function is called
    expect(handleRegisterMock).toHaveBeenCalled();
  });
});
