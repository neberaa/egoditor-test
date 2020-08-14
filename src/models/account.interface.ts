export interface IAccountData {
  userInfo: IUserInfo;
  userContact: IUserContact;
  usage: IAccountUsage;
}

export interface IUserContact {
  firstName: string;
  lastName: string;
  phoneNumber: number;
  company?: string;
  country?: string;
  city?: string;
  street?: string;
  zipCode?: number;
  webSite?: string;
}

export interface IUserInfo {
  id: string;
  signUpDate: Date;
  accountType: string;
}

export interface IAccountUsage {
  scans: number;
  dynamicCodes: number;
  staticCodes: number;
  users: number;
}

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
  id: string;
  signUpDate: Date;
  accountType: string;
  scans: number;
  dynamicCodes: number;
  staticCodes: number;
  users: number;
}
