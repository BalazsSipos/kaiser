import Image from 'next/image';
import Link from 'next/link';
import facebook from '@assets/facebook-white.png';
import csaszar from '@assets/csaszar_barbara.jpg';
import ProfileList from '@components/Profiles/ProfileList';

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-20 bg-zinc-950 p-5 sm:p-20 py-10">
      <h1>ATLÉTIKA SZAKOSZTÁLY</h1>
      <main className="flex flex-col xl:flex-row gap-16 justify-items-center ">
        <div className="flex flex-col lg:flex-row gap-16 basis-2/3">
          <div className="flex flex-col basis-1/2 gap-6">
            <h2 className="self-center">EDZÉSEK</h2>
            <div className="grid grid-cols-2">
              <div>Tavasztól őszig:</div>
              <div>Budapest, XIX. kerület Tichy Lajos Sporttelep</div>
              <div>télen:</div>
              <div>Budapest, XIV. kerület BOK csarnok</div>
            </div>
            <div className="grid grid-cols-2">
              <div>Hétfő:</div>
              <div>18.30-20.00</div>
              <div>Péntek:</div>
              <div>18.00-19.30</div>
              <div>Szombat:</div>
              <div>10.00-12.00</div>
            </div>
          </div>
          <div className="flex flex-col gap-5 basis-1/2">
            <div>
              A szakosztály kiemelten várja a gyermek és felnőtt korosztályon
              túl a szenior atlétákat, célként tűzve ki, hogy az egyesületen
              kívül sportoló és versenyző masters atlétákat összefogja,
              közösséget teremtsen.
            </div>
            <div>
              Amennyiben fiatalon atletizáltál - akár versenyzői, akár
              szabadidős tevékenység keretében - és kedvet érzel ismét jó
              hangulatú és az életkori sajátosságokat figyelembe vevő edzéseken
              részt venni, vagy csak egészségmegőrző mozgást végezni, közöttünk
              a helyed!
            </div>
            <div>
              A gyermekek jelentkezést már 6 éves kortól várjuk, akikkel játékos
              foglalkozások keretében ismertetjük meg az atlétika világát,
              hangsúlyt fektetve a mozgáskoordinációra.
            </div>
            <div>
              Erőnléti edzések keretében szeretettel várjuk a formásodni,
              erősödni, fogyni vágyókat, személyre szabott edzéstervvel és
              étrenddel, életkortól, nemtől függetlenül!
            </div>
            <div className="flex">
              <div className="content-center">
                Keress minket Facebook-on is:
              </div>
              <Link
                className="inline-block px-3"
                href="https://www.facebook.com/kaisersportegyesulet"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  className="transition duration-500 transform hover:scale-125"
                  aria-hidden
                  src={facebook}
                  alt="File icon"
                  width={32}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-items-center basis-1/3">
          <h2>Edző: Dr. Császár Barbara</h2>
          <h3>Tel: +36/30-85-999-46</h3>
          <Image src={csaszar} alt="Kaiser logo" priority />
        </div>
      </main>
      <div>
        <ProfileList members="ATLÉTÁINK"></ProfileList>
      </div>
    </div>
  );
}
