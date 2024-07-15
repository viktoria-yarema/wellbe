import { Timestamp } from "firebase/firestore";

export type Rate = 1 | 2 | 3 | 4 | 5;

export type Comment = {
  id: string;
  reviewerId: string;
  reviewerName: string;
  reviewerImage: string;
  date: Timestamp;
  description: string;
  rate: Rate;
  isWellbeClient: boolean;
};
