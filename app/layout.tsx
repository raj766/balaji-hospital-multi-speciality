import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Balaji Hospital | Multi-Speciality & Trauma Centre",
  description: "Balaji Multi-Speciality Hospital & Trauma Centre, Manjganj, Madhya Pradesh. 24×7 emergency enquiries and specialist consultations.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
