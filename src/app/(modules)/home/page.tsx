"use client";
import { Company } from "@/app/(entities)/company/types";
import CompanyCard from "@/app/_components/CompanyCard";
import FlexColumn from "@/app/_components/Layout/FlexColumn";

export default function HomePage() {
  const mockCompany: Company = {
    id: "comp-12345",
    email: "contact@companyname.com",
    phone: "+1234567890",
    extraPhones: ["+0987654321", "+1029384756"],
    name: "Company Name",
    shortDescription: "Leading provider of innovative solutions.",
    categories: ["Technology", "Innovation"],
    about:
      "Company Name has been a leader in tech innovation since 2005, providing top-notch services.",
    rate: 4.5,
    opinion: 150,
    location: "123 Business Ave, Tech City, TC 12345",
    staff: ["John Doe", "Jane Smith", "Emily Johnson"],
    updateAt: new Date(),
    createAt: new Date("2023-01-01"),
    socialMedia: [
      "facebook.com/companyname",
      "twitter.com/companyname",
      "linkedin.com/company/companyname",
    ],
    schedule: ["Mon-Fri: 9 AM - 5 PM", "Sat: 10 AM - 2 PM", "Sun: Closed"],
    portfolio: [
      "https://example.com/portfolio/image1.jpg",
      "https://example.com/portfolio/image2.jpg",
    ],
  };
  return (
    <FlexColumn>
      <CompanyCard company={mockCompany} />
    </FlexColumn>
  );
}
