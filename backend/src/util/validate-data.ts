// NOTE to avoid duplication this would be moved to a seperate packages to be shared with front end
enum FundingSource {
  NDIS = "NDIS",
  HCP = "HCP",
  CHSP = "CHSP",
  DVA = "DVA",
  HACC = "HACC",
}

// NOTE to avoid duplication this would be moved to a seperate packages to be shared with front end
enum Language {
  English = "English",
  Spanish = "Spanish",
  French = "French",
  German = "German",
  Chinese = "Chinese",
}

export function validate(data: Record<string, string>): Record<string, string> | null {
  const errors: Record<string, string> = {};

  if (!data.name || data.name.trim() === "") {
    errors.name = "Client name is required";
  }

  if (!data.dob || data.dob.trim() === "") {
    errors.dob = "Date of birth is required";
  } else {
    const dob = new Date(data.dob);

    if (isNaN(dob.getTime())) {
      errors.dob = "Invalid date format";
    } else {
      const today = new Date();

      if (dob > today) {
        errors.dob = "Date of birth cannot be in the future";
      }
    }
  }

  if (!Object.values(Language).includes(data.language as Language)) {
    errors.language = "Invalid language";
  }

  if (
    !Object.values(FundingSource).includes(
      data.fundingSource as FundingSource
    )
  ) {
    errors.fundingSource = "Invalid funding source";
  }

  if (Object.keys(errors).length > 0) {
    return errors;
  }

  return null;
}
