import { GroupServices } from "../services/types";

export type Staff = {
  id: string;
  name: string;
  lastName?: string;
  pictureUrl: string;
  position: string;
  portfolio?: string[];
  companyId: string;
  services: GroupServices[];
};
