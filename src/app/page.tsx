import Image from 'next/image';
import kaiser from '@assets/Kaiser-circle.png';
import Footer from '@components/common/Footer';
import Departments from '@components/departments/Departments';
import './page.css';
import Arrow from '@components/common/Arrow';
import Welcome from '@components/welcome/Welcome';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen gap-16">
      <main className="flex flex-col gap-8 items-center justify-center px-20 pt-20">
        <div className="h-[70vh] w-[70vw] logo ">
          <Image
            className="object-scale-down max-h-full m-auto"
            src={kaiser}
            alt="Kaiser logo"
            priority
          />
        </div>
      </main>

      <div>
        <Arrow></Arrow>
      </div>
      <div className="py-24">
        <Departments></Departments>
      </div>
      <div>
        <Welcome></Welcome>
      </div>
      <Footer />
    </div>
  );
}
