import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "Dr Sher Ahmed — Restore Your True Smile", description: "Premium, precise and personal dental care." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
