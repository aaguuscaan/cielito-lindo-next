import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = { title: 'Cielito Lindo — Cabaña', description: 'Cabaña en Villa Yacanto, Córdoba' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="es"><body>{children}</body></html>;
}
