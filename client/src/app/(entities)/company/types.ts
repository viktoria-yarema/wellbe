export type Company = {
  id: string;
  email: string;
  phone: string;
  pictureUrl: string;
  extraPhones?: string[];
  name: string;
  shortDescription: string;
  categories: string[]; // todo: rough types category
  about: string;
  rate: number;
  opinion: number;
  location: string;
  staff: string[]; // todo: type for staff
  updateAt: Date;
  createAt: Date;
  socialMedia?: string[]; // todo: enum for SM
  schedule: string[]; // todo: makeUp the schedule modal
  portfolio?: string[]; // todo: make the model for image
};
