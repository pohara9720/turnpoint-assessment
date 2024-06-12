export enum FundingSource {
  NDIS = "NDIS",
  HCP = "HCP",
  CHSP = "CHSP",
  DVA = "DVA",
  HACC = "HACC",
}

export type Client = {
  id: string;
  name: string;
  dob: string;
  language: string;
  fundingSource: FundingSource;
};
