import "./globals.css";

export const metadata = {
  title: "Artesanatos da Tamires",
  description: "Peças artesanais e personalizadas feitas com carinho."
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
