import "./globals.css";
import { Providers } from "./providers";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="transition-colors">
      <body className="mx-auto h-dvh min-h-dvh max-w-6xl min-w-[700px]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
