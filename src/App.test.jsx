import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";

test("renders profile and badge link", () => {
  render(<App />);
  expect(screen.getByText(/Carl Angcana/)).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Credly" })).toHaveAttribute("href", "https://www.credly.com/users/carl-angelo-angcana");
});

test("background follows the pointer and returns when the window loses focus", async () => {
  const { container } = render(<App />);
  const region = container.querySelector('.color-region--pink');
  fireEvent(window, new MouseEvent('pointermove', { clientX: 500, clientY: 250 }));
  await waitFor(() => {
    expect(parseFloat(region.style.getPropertyValue('--pull-x'))).toBeGreaterThan(80);
  });
  fireEvent.blur(window);
  await waitFor(() => {
    expect(region.style.getPropertyValue('--pull-x')).toBe('0px');
  });
});
