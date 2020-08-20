export interface IUserData {
  firstName: string;
  lastName: string;
  phoneNumber: number;
  company?: string;
  country?: string;
  city?: string;
  street?: string;
  zipCode?: number;
  webSite?: string;
  email: string;
  id: string;
  signUpDate: Date;
  accountType: string;
  scans: number;
  dynamicCodes: number;
  staticCodes: number;
  users: number;
  scansLimit: string;
  dynamicCodesLimit: number;
  staticCodesLimit: number;
  usersLimit: number;
}
