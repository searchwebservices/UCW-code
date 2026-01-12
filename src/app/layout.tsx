import type { Metadata } from "next";
import "./globals.css";
import { VisualEditsMessenger } from "orchids-visual-edits";

export const metadata: Metadata = {
  title: "Unique Cabo Weddings | Destination Wedding Planners",
  description: "Your Dream Cabo Wedding Starts Here. Local expertise and trust for unique Cabo weddings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
