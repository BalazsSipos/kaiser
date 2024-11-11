import Image from 'next/image';

export type medalProps = {
  competitionAbbreviation: string; // 'vb', 'eb', 'ob', 'bb'
  competitionName: string; // 'vb', 'eb', 'ob', 'bb'
  medal: string; // 'gold', 'silver', 'bronze'
  quantity: number;
};

export type ProfileProps = {
  name: string;
  birthDate: Date;
  sports: string[];
  medals: medalProps[];
  imgSrc: string;
  text: string;
};

export default function ProfileItem(props: ProfileProps) {
  return (
    <section className="grid grid-rows-15 grid-cols-8 border-4 rounded-lg border-zinc-700 transition ease-in-out delay-50 duration-300 hover:border-zinc-200 bg-zinc-800">
      <div className="col-span-7 text-2xl text-center p-2 bg-zinc-700 bg-gradient-to-r from-zinc-600 to-zinc-400 rounded-ss-sm">
        {props.name}
      </div>
      {/* <div className="flex col-span-6 text-center p-1 justify-center bg-zinc-700">
        {props.sports.map((sport, index) => (
          <span key={index}>
            <Image
              src={`/${sport}.png`}
              alt={props.imgAlt}
              width={40}
              height={40}
            />
          </span>
        ))}
      </div> */}
      <div className="text-xl text-center justify-items-center p-2 bg-zinc-700 border-b-4 border-zinc-700">
        U14
      </div>
      <div className="col-span-8 row-span-10 text-center px-8 py-4">
        <Image src={props.imgSrc} alt={props.name} width={400} height={430} />
      </div>
      <div
        data-tooltip-target="tooltip"
        className="flex col-span-8 row-span-4 text-center p-4 bg-zinc-700"
      >
        {props.medals.map((medalObj, index) => (
          <div key={index} className="has-tooltip flex relative px-1">
            {medalObj.competitionName && (
              <span className="tooltip rounded shadow-lg p-2 border-2 bg-zinc-800 -mt-12">
                {medalObj.competitionName}
              </span>
            )}
            <Image
              src={`/${medalObj.medal}${medalObj.competitionAbbreviation}.png`}
              alt={`/${medalObj.medal} medal`}
              width={50}
              height={50}
            />
            {medalObj.quantity >= 2 && (
              <div
                className={`absolute px-9 bottom-11 inset-x-0 text-md text-center text-zinc-300`}
              >
                x{medalObj.quantity}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
