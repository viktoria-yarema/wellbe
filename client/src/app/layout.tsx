import type { Metadata } from "next";
import ThemeRegistry from "./_theme/ThemeRegister";
import MobileLayout from "./_layouts/MobileLayout";
import FlexColumn from "./_components/Layout/FlexColumn";

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
          <MobileLayout>
            <FlexColumn px="1rem">{children}</FlexColumn>
          </MobileLayout>
        </body>
      </ThemeRegistry>
    </html>
  );
}
