import React from "react";
import { screen, render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { MailFilled } from "@ant-design/icons";

import { ButtonComponent, BUTTON_TYPES } from "../components";

describe("Testing ButtonComponent:", () => {
  expect.extend(toHaveNoViolations);
  test("Should render ButtonComponent", async () => {
    render(<ButtonComponent role="button">Button</ButtonComponent>);

    const component = screen.getByRole("button");
    expect(await axe(component)).toHaveNoViolations();
    expect(component).toBeInTheDocument();
  });
  Object.keys(BUTTON_TYPES).map(async (buttontype) => {
    test(`Should render Button ${buttontype}`, () => {
      render(
        <div role="grid">
          <ButtonComponent
            buttontype={buttontype as BUTTON_TYPES}
            role="button"
          >
            Button
          </ButtonComponent>
          <ButtonComponent
            buttontype={buttontype as BUTTON_TYPES}
            role="button"
            icon={<MailFilled />}
          >
            Button
          </ButtonComponent>
          <ButtonComponent
            buttontype={buttontype as BUTTON_TYPES}
            role="button"
            icon={<MailFilled />}
          />
          <ButtonComponent
            large
            buttontype={buttontype as BUTTON_TYPES}
            role="button"
          >
            Button
          </ButtonComponent>
          <ButtonComponent
            large
            buttontype={buttontype as BUTTON_TYPES}
            role="button"
            icon={<MailFilled />}
          >
            Button
          </ButtonComponent>
          <ButtonComponent
            large
            buttontype={buttontype as BUTTON_TYPES}
            role="button"
            icon={<MailFilled />}
            loading={true}
          >
            Button
          </ButtonComponent>
          <ButtonComponent
            large
            buttontype={buttontype as BUTTON_TYPES}
            role="button"
            icon={<MailFilled />}
          />
        </div>
      );

      const component = screen.getByRole("grid");
      expect(component).toMatchSnapshot();
    });
  });
});
