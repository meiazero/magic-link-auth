import { Providers } from "@/components/elements";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as Font } from "next/font/google";
import "../styles/globals.css";

const font = Font({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Magic Link Authentication",
  description: "Magic Link Authentication with Next.js",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn("min-h-screen bg-background antialiased", font.className)}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
