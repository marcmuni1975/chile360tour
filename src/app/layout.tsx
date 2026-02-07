import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "M&M Services",
  description: "Servicios Profesionales de Desarrollo y Automatización",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
