export type Service = {
  id: string;
  timestamp: string;
  name: string;
  price: string;
  active: boolean;
  currency: string;
};

export type GroupServices = {
  id: string;
  name: string;
  services: Service[];
};
