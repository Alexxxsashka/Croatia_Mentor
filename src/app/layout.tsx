import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Croatia Mentor - AI-Powered Croatian Language Learning",
  description:
    "Master Croatian with an AI-powered tutor. Structured lessons, interactive games, and real-time conversation practice for all CEFR levels.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
