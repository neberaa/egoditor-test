import { IUserData } from "@/models/account.interface";

export interface ITab {
  title: string;
  isActive: boolean;
  content: IUserData | null;
}
