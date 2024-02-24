import type { Metadata } from "next";
import ThemeRegistry from "./_theme/ThemeRegister";
import { StrictMode } from "react";
import MainLayout from "./_layouts";

export const metadata: Metadata = {
  title: "Wellbe",
  description:
    "Wellbe Booking: Premier Wellness & Self-Care Services | Book Online Now",
  icons: [{ rel: "icon", url: "/icon.ico" }],
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
            <MainLayout>{children}</MainLayout>
          </StrictMode>
        </body>
      </ThemeRegistry>
    </html>
  );
}
