export const metadata = {
  title: 'DIGIREACH ONE',
  description: 'DIGIREACH ONE Web Application',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
