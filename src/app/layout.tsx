import { Providers } from "../components/provider/providers";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="transition-colors ">
      <body className="mx-auto h-[100dvh] min-h-[100dvh] min-w-[700px] max-w-6xl ">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
