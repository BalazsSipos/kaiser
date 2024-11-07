import Header from '@components/common/Header';
import Footer from '@components/common/Footer';

export default function DepartmentLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen font-press-start">
      <div>
        <Header />
      </div>
      <div>{children}</div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
