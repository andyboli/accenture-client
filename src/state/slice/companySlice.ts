import { createSlice } from "@reduxjs/toolkit";

import { CompanyState, Company } from "../../entities/Company";
import { companyApi } from "../api/companyApi";
import { RootState } from "../store";

const initialState = {
  editCompany: undefined,
  error: "",
} as CompanyState;

export const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    editCompany: (
      state,
      { payload: company }: { payload: Company | undefined }
    ) => ({
      ...state,
      editCompany: company,
    }),
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      companyApi.endpoints.getCompanies.matchRejected,
      (_, action) => ({
        ...initialState,
        error: action.error.message as string,
      })
    );
  },
});

export const CompanyActions = companySlice.actions;

export default companySlice.reducer;

export const selectCompany = (state: RootState) => state.company;
