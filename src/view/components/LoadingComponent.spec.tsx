import { screen, render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";

import { LoadingComponent } from "../components";

test("should render loading component", async () => {
  expect.extend(toHaveNoViolations);

  render(<LoadingComponent />);

  const loadingIcon = screen.getByRole("img");

  expect(loadingIcon).toBeInTheDocument();

  expect(await axe(loadingIcon)).toHaveNoViolations();

  expect(loadingIcon).toMatchSnapshot();
});
