import { validateFormData } from "../util";
import { Client, FundingSource, Language } from "src/types";
import { describe, expect, it } from "vitest";

describe("validateFormData function", () => {
  const mockForm: Partial<Client> = {
    name: "Plop",
    dob: "1990-01-01",
    language: Language.English,
    fundingSource: FundingSource.CHSP,
  };

  it("returns null for valid data", () => {
    const result = validateFormData(mockForm);
    expect(result).toBeNull();
  });

  it("returns errors for missing name", () => {
    const formData: Partial<Client> = {
      ...mockForm,
      name: "",
    };
    const result = validateFormData(formData);
    expect(result?.name).toBe("Client name is required");
  });

  it("returns error for invalid date of birth format", () => {
    const formData: Partial<Client> = {
      ...mockForm,
      dob: "plop",
    };
    const result = validateFormData(formData);
    expect(result?.dob).toBe("Invalid date format");
  });

  it("returns error for future date of birth", () => {
    const formData: Partial<Client> = {
      ...mockForm,
      dob: "3000-01-01",
    };
    const result = validateFormData(formData);
    expect(result?.dob).toBe("Date of birth cannot be in the future");
  });

  it("returns error for invalid language", () => {
    const formData: Partial<Client> = {
      ...mockForm,
      language: "plop" as Language,
    };
    const result = validateFormData(formData);
    expect(result?.language).toBe("Invalid language");
  });

  it("returns error for invalid funding source", () => {
    const formData: Partial<Client> = {
      ...mockForm,
      fundingSource: "plop" as FundingSource,
    };
    const result = validateFormData(formData);
    expect(result?.fundingSource).toBe("Invalid funding source");
  });
});
