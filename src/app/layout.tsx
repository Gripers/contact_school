import './globals.css';

export const metadata = {
  title: 'Contact School',
  description: 'learning center',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
