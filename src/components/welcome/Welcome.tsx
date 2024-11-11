'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import bhead from '@assets/bhead.png';

export default function Welcome() {
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('shown');
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.25,
      }
    );
    const target = targetRef.current;

    if (target) {
      observer.observe(target);
    }

    // Clean up the observer
    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <main>
      <div className="flex flex-col gap-5 basis-1/2 p-10 sm:p-24 lg:px-80">
        <h1 className="text-center pb-20 initial" ref={targetRef}>
          Elnöki köszöntő
        </h1>
        <figure className="max-w-screen-md mx-auto text-center">
          <svg
            className="w-10 h-10 mx-auto mb-3 text-gray-600"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <blockquote>
            <div className="flex flex-col gap-5 text-2xl italic font-extralight text-white">
              <div>
                &quot;A Császár család tagjainak életútját mindig meghatározta a
                sport, így csak idő kérdése volt, hogy megálmodjuk, létrehozzuk
                saját sportegyesületünket.
              </div>
              <div>
                Édesapám, Császár József birkózó múlttal rendelkezik, talán
                ezért is vonzott mindig a küzdősport világa engem.
              </div>
              <div>
                Testvérem, Császár Krisztián kiváló atléta volt, (sprinter), és
                a technikai sportok terén is megmutatta különleges tehetségét,
                gyermekkorától (4 éves korától serdülőkoráig) sorra nyerte a
                moto-cross versenyeket, felnőttként is igazolta rátermettségét:
                2004-ben gokart magyar bajnok lett K-100 kategóriában a Pénzes
                SE versenyzőjeként.
              </div>
              <div>
                Magam is atlétaként kezdtem a sportolást, 6 éves koromtól 18
                éves koromig rendszeresen vettem részt a diákolimpiai
                megmérettetéseken és szereztem dobogós helyezéseket. Sérülések
                miatt feladni kényszerültem az atlétikát, ezt követően 18 éven
                át, 36 éves koromig testépítéssel foglalkoztam, és vetettem bele
                magam a szakirodalmakba, saját magam edzője voltam.
              </div>
              <div>
                2014-ben megismerkedtem a muaythai sporttággal és belekóstoltam
                a versenyzésbe is, majd 2018- ban a kesztyűt judo ruhára
                váltottam és mai napig is a MESI SE judokájaként tanulom a judo
                fortélyait. 2021-ben a Masters Judo Magyar Bajnokságon magyar
                bajnok lettem Huszár Gábor tanítványaként.
              </div>
              <div>
                Az atlétika versenyvilágba újra már szeniorként kapcsolódtam be,
                és 2016 óta 17 alkalommal álltam magyar bajnokságon a dobogó
                legfelsőbb fokán sprint és középtávú futószámokban és
                távolugrásban, és számtalan alkalommal hoztam emellett ezüst és
                bronz érmet súlylökésben, gerelyhajításban, diszkoszvetésben,
                ect.
              </div>
              <div>
                2016-ban jeles minősítéssel atlétika edzői végzettséget
                szereztem.
              </div>
              <div>
                A ju jitsuval 2020-ban ismerkedtem meg, amikor is Bakos László
                mestert felkerestem, azóta a judo mellett kiegészítésként ju
                jitsu edzéseket is folytatok, és segédedzőként segítem mesterem
                munkáját. Innen is jött az ötlet a saját sportegyesület
                létrehozására, amelyet családtagjaimmal valósítottunk meg immár
                családtaggá vált mesteremmel együtt.
              </div>
              <div>
                A KAISER SPORTEGYESÜLET elnevezés tükrözi családunk német
                nemzetiségét, mely egyesületet a Fővárosi Törvényszék
                2021.10.14. napján jegyzett be.
              </div>
              <div>
                A sportolni vágyó gyermekeket, felnőtteket, nemre, korra
                tekintet nélkül várja küzdősport, atlétika, szabadidősport
                szakosztályunk!&quot;
              </div>
            </div>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
            <Image
              className="w-6 h-6 rounded-full"
              src={bhead}
              alt="profile picture"
            />
            <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-700">
              <cite className="pe-3 font-medium text-white">
                Dr. Császár Barbara
              </cite>
              <cite className="ps-3 text-sm text-gray-400">
                Elnök, atlétika szakosztályvezető, atlétika edző
              </cite>
            </div>
          </figcaption>
        </figure>
      </div>
    </main>
  );
}
