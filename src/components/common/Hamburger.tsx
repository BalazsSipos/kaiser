type HamburgerProps = {
  isOpen: boolean;
  onClick: () => void;
};

export default function Hamburger(props: HamburgerProps) {
  return (
    <div>
      <button
        className="group h-16 w-16 rounded-full border-2 border-foreground bg-zinc-700"
        onClick={props.onClick}
      >
        <div className="grid justify-items-center gap-1.5">
          <span
            className={`h-1 w-8 rounded-full bg-foreground transition ${
              props.isOpen ? 'rotate-45 translate-y-2.5' : ''
            }`}
          ></span>
          <span
            className={`h-1 w-8 rounded-full bg-foreground transition ${
              props.isOpen ? 'scale-x-0' : ''
            }`}
          ></span>
          <span
            className={`h-1 w-8 rounded-full bg-foreground transition ${
              props.isOpen ? '-rotate-45 -translate-y-2.5' : ''
            }`}
          ></span>
        </div>
      </button>
    </div>
  );
}
