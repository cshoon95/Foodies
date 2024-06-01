import MainHeader from '@/components/main-header/main-header';
import './globals.css';

// 페이지에 메타데이터가 있으면, 페이지 메타데이터가 우선 적용됨.
// 중첩된 레이아웃에 메타데이터가 있으면, 레이아웃 메타데이터가 우선 적용됨.
export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}