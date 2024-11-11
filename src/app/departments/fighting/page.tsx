import Image from 'next/image';
import Link from 'next/link';
import mester from '@assets/mester.jpg';
import facebook from '@assets/facebook-white.png';

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-20 bg-zinc-950 p-5 sm:p-20 py-10">
      <h1>KÖZELHARC SZAKOSZTÁLY</h1>
      <main className="flex flex-col xl:flex-row gap-16 justify-center items-center">
        <div className="flex flex-col lg:flex-row gap-16 basis-2/3 items-center">
          <div className="flex flex-col basis-1/2 gap-6">
            <h2 className="self-center">EDZÉSEK</h2>
            <div className="grid grid-cols-2">
              <div>Helyszín:</div>
              <div>Budapest, XVII. kerület Uszoda u. 2.</div>
            </div>
            <div className="grid grid-cols-2">
              <div>Kedd:</div>
              <div>17.00-18.00</div>
              <div>Péntek:</div>
              <div>17.00-18.00</div>
            </div>
          </div>
          <div className="flex flex-col gap-5 basis-1/2">
            <div>
              Bakos László mester már gyermekkora óta versenyszerűen űzi a
              küzdősportot, a kung-fu, muaythai, ökölvívás, ju jitsu
              sporttágokban megmérettetések során van túl, külön kiemelendő,
              hogy profi ökölvívó múlttal rendelkezik.
            </div>
            <div>
              2018-ban jó minősítéssel ju jitsu edzői végzettséget szerzett.
            </div>
            <div>
              A Magyar Közelharc Kézitusa Szövetségben sikeres vizsgát tett, és
              3 dan fokozatot ért el ju jitsuban 2020-ban. A honvédelem ügye
              iránt elkötelezett mesternek - aki a MATASZ tagja is - a katonai
              életpálya modell népszerűsítése a fő életcélja, amelynek keretében
              honvéd kadét versenyzőit készíti fel a versenyekre, katonai
              teljesítménytúrákat teljesít, és nem rest maga sem elindulni
              különböző megmérettetéseken (pl. atlétikai verseny, NATO futás,
              Bocskai Portya katonai teljesítménytúra, ect.)
            </div>
            <div>
              Folyamatosan képzi magát, rendszeresen vesz részt különböző
              küzdősport szemináriumokon, ahová rendszerint tanítványait is
              elviszi, hogy tapasztalatokat szerezzenek, új technikákat
              tanuljanak.
            </div>
            <div>
              A tanítványai rendre eredményesen szerepelnek és dobogós
              helyezéseket hoznak a Magyar Grappling Szövetség által szervezett
              grappling versenyeken, illetve muaythai, kempo, judo versenyeken.
              A mester nemcsak a fiatal, hanem a felnőtt és szeniorkorú
              sportolni vágyókat is várja, hiszen a mai világban az önvédelmi
              tudás felértékelődött és fontossá vált.
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
                  // height={16}
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-items-center basis-1/3">
          <h2>Edző: Bakos László 3. dan mester</h2>
          <h3>Tel: +36/30-49-55-943</h3>
          <Image
            src={mester}
            alt="Kaiser logo"
            // width={380}
            // height={38}
            priority
          />
        </div>
      </main>
    </div>
  );
}
