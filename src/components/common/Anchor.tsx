import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import './anchor.css';

export type AnchorProps = {
  text: string;
  href: string;
  target: string;
  imgSrc?: string;
  img: StaticImageData;
  imgAlt?: string;
  imgWidth?: number;
  imgHeight?: number;
};

export default function Anchor(props: AnchorProps) {
  return (
    <section>
      <div className="text-3xl text-center p-4">{props.text}</div>
      <Link href={props.href} target={props.target} rel="noopener noreferrer">
        {props.img && (
          <Image
            className="border-4 rounded-lg border-zinc-600 transition ease-in-out delay-50 hover:scale-105 duration-300 hover:border-zinc-200 hover:rotate-2"
            src={props.img}
            alt={props.imgAlt ? props.imgAlt : ''}
            width={props.imgWidth}
          />
        )}
      </Link>
    </section>
  );
}
