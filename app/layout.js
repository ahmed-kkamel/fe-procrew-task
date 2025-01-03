import "./globals.css";

export const metadata = {
  title: "Frontend Task | Procrow",
  description: "This is a frontend task for Procrow.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
