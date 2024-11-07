import './arrow.css';

export default function Arrow() {
  return (
    <div>
      <div className="arrow1 grid justify-items-center gap-1.5">
        <span className=" h-1 w-6 rounded-full bg-foreground transition rotate-45 -translate-x-2"></span>
        <span className=" h-1 w-6 rounded-full bg-foreground transition -rotate-45 translate-x-2 -translate-y-2.5"></span>
      </div>
      <div className="arrow2 grid justify-items-center gap-1.5">
        <span className=" h-1 w-6 rounded-full bg-foreground transition rotate-45 -translate-x-2"></span>
        <span className=" h-1 w-6 rounded-full bg-foreground transition -rotate-45 translate-x-2 -translate-y-2.5"></span>
      </div>
      <div className="arrow3 grid justify-items-center gap-1.5">
        <span className=" h-1 w-6 rounded-full bg-foreground transition rotate-45 -translate-x-2"></span>
        <span className=" h-1 w-6 rounded-full bg-foreground transition -rotate-45 translate-x-2 -translate-y-2.5"></span>
      </div>
    </div>
  );
}
