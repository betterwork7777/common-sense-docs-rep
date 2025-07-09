
import './globals.css';

export const metadata = {
  title: 'Common Sense Docs',
  description: 'Affordable legal document help in multiple languages',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
