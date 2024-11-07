import Image from 'next/image';
import Link from 'next/link';
import kaiser from '@assets/kaiser.jpeg';
import facebook from '@assets/facebook-white.png';
import './footer.css';

export default function Footer() {
  return (
    <footer className="flex flex-col sm:flex-row gap-8 text-xs p-20 justify-center items-center bg-zinc-900">
      <Link href="/">
        <Image
          aria-hidden
          src={kaiser}
          alt="File icon"
          width={320}
        />
      </Link>
      <div className="flex flex-col items-center sm:items-start basis-1/3">
        <div className="pb-0 sm:pb-1">
          Székhely: 1185 Budapest, Borics Pál u. 25.
        </div>
        <div>Nyilvántartási szám: 01-02-0017728</div>
      </div>
      <div className="flex flex-col items-center sm:items-start basis-1/3">
        <div className="pb-0 sm:pb-1">Elnök: Dr. Császár Barbara</div>
        <div className="pb-0 sm:pb-1">Elnökségi tag: Bakos László</div>
        <div>Elnökségi tag: Császár Krisztián</div>
      </div>
      <div className="flex flex-col items-center sm:items-start basis-1/3 ">
        <div className="pb-0 sm:pb-1">Létesítő okirat kelte: 2021.09.10.</div>
        <div className="pb-0 sm:pb-1">Bejegyző végzés kelte: 2021.10.14.</div>
      </div>
      <div>
        <Link
          href="https://www.facebook.com/kaisersportegyesulet"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className="turn"
            aria-hidden
            src={facebook}
            alt="File icon"
            width={64}
          />
        </Link>
      </div>
    </footer>
  );
}
