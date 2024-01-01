import type { Metadata } from "next";
import ThemeRegistry from "./_theme/ThemeRegister";
import FlexColumn from "./_components/Layout/FlexColumn";
import { StrictMode } from "react";
import MainLayout from "./_layouts";

export const metadata: Metadata = {
  title: "Wellbe",
  description:
    "Wellbe Booking: Premier Wellness & Self-Care Services | Book Online Now",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <body>
          <StrictMode>
            <MainLayout>
              <FlexColumn px="1rem">{children}</FlexColumn>
            </MainLayout>
          </StrictMode>
        </body>
      </ThemeRegistry>
    </html>
  );
}
