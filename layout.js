export const metadata = {
  title: "KO-BUD PREMIUM",
  description: "Mobilny kalkulator wycen budowlanych",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body>{children}</body>
    </html>
  );
}
