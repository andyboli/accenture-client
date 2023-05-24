import React from "react";

import { COLORS_TYPES, SPACE_TYPES } from "../foudation";
import { FlexStart } from "../components";
import {
  CreateCompanySheets,
  OpenCreateCompanySheetsButton,
} from "./components";

const CreateCompanyContainer: React.FC = () => (
  <FlexStart
    color={COLORS_TYPES.BLACK}
    desktopMargin={SPACE_TYPES.NONE}
    mobileMargin={SPACE_TYPES.NONE}
    width="100%"
  >
    <OpenCreateCompanySheetsButton />
    <CreateCompanySheets />
  </FlexStart>
);

export default CreateCompanyContainer;
