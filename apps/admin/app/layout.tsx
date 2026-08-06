export const metadata = {
  title: 'DIGIREACH ONE Admin',
  description: 'DIGIREACH ONE Admin Dashboard',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
