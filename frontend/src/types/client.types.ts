export enum FundingSource {
  NDIS = "NDIS",
  HCP = "HCP",
  CHSP = "CHSP",
  DVA = "DVA",
  HACC = "HACC",
}

export enum Language {
  English = "English",
  Spanish = "Spanish",
  French = "French",
  German = "German",
  Chinese = "Chinese",
}

export interface ClientPayload {
  name: string;
  dob: string;
  language: Language;
  fundingSource: FundingSource;
}

export interface Client extends ClientPayload {
  id: string;
}
