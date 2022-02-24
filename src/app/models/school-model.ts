export class SchoolModel {
  schoolId: number;
  schoolCode: string;
  schoolName: string;
  schoolEmail: string;
  registrationNumber: string;
  tagline: string;
  description: string;
  logo: string;

  address1: string;
  address2: string;
  city: string;
  stateId: number;
  countryId: number;
  pinCode: string;

  ownerName: string;
  ownerContactNo: string;
  ownerEmail: string;
  gender: number;
  dob: Date;
  uidType: number;
  uidNumber: string;

  bankName: string;
  ifscCode: string;
  accountNo: string;
  bankAddress: string;
  paymentLink: string;
  additionalInfo: string;

  rank: string;
  activeStatus: number;
  createdByUserId: number;
  updatedByUserId: number;
  createdDate: string;
}