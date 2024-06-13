import { Client, FundingSource, FormErrors, Language } from "src/types";

export function validateFormData(formData: Partial<Client>): FormErrors | null {
  const errors: FormErrors = {};

  if (!formData.name || formData.name.trim() === "") {
    errors.name = "Client name is required";
  }

  if (!formData.dob || formData.dob.trim() === "") {
    errors.dob = "Date of birth is required";
  } else {
    const dob = new Date(formData.dob);

    if (isNaN(dob.getTime())) {
      errors.dob = "Invalid date format";
    } else {
      const today = new Date();

      if (dob > today) {
        errors.dob = "Date of birth cannot be in the future";
      }
    }
  }

  if (!Object.values(Language).includes(formData.language as Language)) {
    errors.language = "Invalid language";
  }

  if (
    !Object.values(FundingSource).includes(
      formData.fundingSource as FundingSource
    )
  ) {
    errors.fundingSource = "Invalid funding source";
  }

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  return null;
}
