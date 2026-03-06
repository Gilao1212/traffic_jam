import "./globals.css";

export const metadata = {
  title: "Mogadishu Traffic Detective",
  description: "Stay ahead of the jam in Mogadishu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ background: "#f1f5f9", margin: 0 }}>{children}</body>
    </html>
  );
}
