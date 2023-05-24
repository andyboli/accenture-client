import React from "react";

import { BORDER_TYPES, COLORS_TYPES } from "../../foudation";
import { FlexBetween, TabsComponent } from "../../components";
import { CompanyCard } from "../components";
import * as Company from "../../../entities/Company";

interface CompanyTabsProps {
  companies: Company.Company[];
}

const CompanyTabs: React.FC<CompanyTabsProps> = ({ companies }) => {
  const companiesChunks = Company.getCompaniesChunks(companies);
  return (
    <TabsComponent
      items={companiesChunks.map((chunk, chunkIndex) => ({
        label: `Tab-${chunkIndex}`,
        key: `Tab-${chunkIndex}`,
        children: (
          <FlexBetween
            color={COLORS_TYPES.WHITE}
            border={BORDER_TYPES.NONE}
            width="100%"
            key={`CompanyTabs-${chunkIndex}`}
          >
            {chunk.map((company) => (
              <CompanyCard company={company} />
            ))}
          </FlexBetween>
        ),
      }))}
    />
  );
};

export default CompanyTabs;
