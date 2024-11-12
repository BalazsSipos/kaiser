import ProfileItem, { ProfileProps } from './ProfileItem';

const athletes: ProfileProps[] = [
  {
    name: 'Áron',
    birthDate: new Date(1977, 1, 1),
    sports: [''],
    medals: [
      {
        competitionAbbreviation: '',
        competitionName: '',
        medal: 'medal-placeholder',
        quantity: 0,
      },
    ],
    imgSrc: '/man.png',
    text: '',
  },
  {
    name: 'Rózi',
    birthDate: new Date(1977, 1, 1),
    sports: [''],
    medals: [
      {
        competitionAbbreviation: '',
        competitionName: '',
        medal: 'medal-placeholder',
        quantity: 0,
      },
    ],
    imgSrc: '/woman.png',
    text: '',
  },
  {
    name: 'Bakos László',
    birthDate: new Date(1977, 1, 1),
    sports: ['hammer'],
    medals: [
      {
        competitionAbbreviation: 'ob',
        competitionName: 'Szenior Országos Bajnokság',
        medal: 'gold',
        quantity: 2,
      },
    ],
    imgSrc: '/man.png',
    text: '',
  },
  {
    name: 'Bodorkós Horváth Kata',
    birthDate: new Date(1970, 1, 1),
    sports: ['walking'],
    medals: [
      {
        competitionAbbreviation: 'vb',
        competitionName: 'Szenior Világbajnokság',
        medal: 'silver',
        quantity: 2,
      },
      {
        competitionAbbreviation: 'eb',
        competitionName: 'Szenior Európabajnokság',
        medal: 'gold',
        quantity: 3,
      },
      {
        competitionAbbreviation: 'ob',
        competitionName: 'Szenior Országos Bajnokság',
        medal: 'gold',
        quantity: 13,
      },
    ],
    imgSrc: '/woman.png',
    text: '',
  },
  {
    name: 'Dr. Császár Barbara',
    birthDate: new Date(1978, 3, 3),
    sports: ['atlétika'],
    medals: [
      {
        competitionAbbreviation: 'ob',
        competitionName: 'Szenior Országos Bajnokság',
        medal: 'gold',
        quantity: 17,
      },
    ],
    imgSrc: '/woman.png',
    text: '',
  },
  {
    name: 'Fodor Andrea',
    birthDate: new Date(1995, 5, 5),
    sports: [''],
    medals: [
      {
        competitionAbbreviation: '',
        competitionName: '',
        medal: 'medal-placeholder',
        quantity: 0,
      },
    ],
    imgSrc: '/woman.png',
    text: '',
  },
  {
    name: 'Kovács Boglárka',
    birthDate: new Date(2013, 11, 11),
    sports: ['javelin'],
    medals: [
      {
        competitionAbbreviation: 'bb',
        competitionName: 'Budapest Bajnokság',
        medal: 'bronze',
        quantity: 1,
      },
    ],
    imgSrc: '/woman.png',
    text: '',
  },
  {
    name: 'Kovács Mihály',
    birthDate: new Date(2007, 11, 11),
    sports: ['multi'],
    medals: [
      {
        competitionAbbreviation: '',
        competitionName: '',
        medal: 'gold',
        quantity: 7,
      },
    ],
    imgSrc: '/man.png',
    text: '',
  },
  {
    name: 'Miskolczi Árpád',
    birthDate: new Date(1985, 7, 7),
    sports: ['shot put'],
    medals: [
      {
        competitionAbbreviation: '',
        competitionName: '',
        medal: 'medal-placeholder',
        quantity: 0,
      },
    ],
    imgSrc: '/man.png',
    text: '',
  },
  {
    name: 'Molnár Medárd',
    birthDate: new Date(2015, 7, 7),
    sports: [''],
    medals: [
      {
        competitionAbbreviation: '',
        competitionName: '',
        medal: 'medal-placeholder',
        quantity: 0,
      },
    ],
    imgSrc: '/man.png',
    text: '',
  },
  {
    name: 'Molnár Nimród',
    birthDate: new Date(2013, 7, 7),
    sports: ['long jump', 'high jump'],
    medals: [
      {
        competitionAbbreviation: '',
        competitionName: '',
        medal: 'medal-placeholder',
        quantity: 0,
      },
    ],
    imgSrc: '/man.png',
    text: '',
  },
  {
    name: 'Probst Levente',
    birthDate: new Date(2012, 7, 7),
    sports: ['shot put'],
    medals: [
      {
        competitionAbbreviation: '',
        competitionName: '',
        medal: 'medal-placeholder',
        quantity: 0,
      },
    ],
    imgSrc: '/man.png',
    text: '',
  },
  {
    name: 'Simon Konrád',
    birthDate: new Date(2012, 2, 2),
    sports: ['sprint'],
    medals: [
      {
        competitionAbbreviation: '',
        competitionName: '',
        medal: 'medal-placeholder',
        quantity: 0,
      },
    ],
    imgSrc: '/man.png',
    text: '',
  },
  {
    name: 'Sipos-Balázsi Ágnes',
    birthDate: new Date(1979, 11, 25),
    sports: ['sprint'],
    medals: [
      {
        competitionAbbreviation: 'ob',
        competitionName: 'Szenior Országos Bajnokság',
        medal: 'gold',
        quantity: 1,
      },
    ],
    imgSrc: '/woman.png',
    text: '',
  },
  {
    name: 'Sipos Arnold',
    birthDate: new Date(2015, 11, 24),
    sports: ['long run'],
    medals: [
      {
        competitionAbbreviation: '',
        competitionName: '',
        medal: 'medal-placeholder',
        quantity: 0,
      },
    ],
    imgSrc: '/man.png',
    text: '',
  },
  {
    name: 'Sipos Balázs',
    birthDate: new Date(1981, 10, 9),
    sports: ['multi'],
    medals: [
      {
        competitionAbbreviation: 'ob',
        competitionName: 'Szenior Országos Bajnokság',
        medal: 'silver',
        quantity: 2,
      },
      {
        competitionAbbreviation: 'ob',
        competitionName: 'Szenior Országos Bajnokság',
        medal: 'bronze',
        quantity: 3,
      },
    ],
    imgSrc: '/man.png',
    text: '',
  },
  {
    name: 'Sipos Bendegúz',
    birthDate: new Date(2019, 5, 6),
    sports: ['multi'],
    medals: [
      {
        competitionAbbreviation: '',
        competitionName: '',
        medal: 'silver',
        quantity: 1,
      },
      {
        competitionAbbreviation: '',
        competitionName: '',
        medal: 'bronze',
        quantity: 1,
      },
    ],
    imgSrc: '/man.png',
    text: '',
  },
  {
    name: 'Varge Gyula',
    birthDate: new Date(1977, 12, 12),
    sports: ['long run'],
    medals: [
      {
        competitionAbbreviation: 'ob',
        competitionName: 'Szenior Országos Bajnokság',
        medal: 'silver',
        quantity: 2,
      },
    ],
    imgSrc: '/man.png',
    text: '',
  },
];

export default function ProfileList({ members }: { members: string }) {
  return (
    <div className="py-20">
      <h2 className="text-center">{members}</h2>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"> */}
      <div className="flex flex-wrap gap-8 justify-center py-20">
        {athletes.map((athlete, index) => (
          // <div key={index}>
          <div key={index} className="w-80 sm:w-96">
            <ProfileItem {...athlete} />
          </div>
        ))}
      </div>
    </div>
  );
}
