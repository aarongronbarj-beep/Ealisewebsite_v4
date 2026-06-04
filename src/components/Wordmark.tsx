/** The `ealize.` wordmark with the `e` mark. Dot is always brand blue. */
export default function Wordmark({
  className = '',
  dark = false,
  showMark = true,
}: {
  className?: string;
  dark?: boolean;
  showMark?: boolean;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 font-heading text-xl font-bold tracking-tight ${
        dark ? 'text-white' : 'text-ink'
      } ${className}`}
    >
      {showMark && (
        <span
          className="grid h-7 w-7 place-items-center rounded-[7px] bg-blue text-white"
          aria-hidden
        >
          <span className="font-heading text-[15px] font-bold leading-none">e</span>
        </span>
      )}
      <span className="leading-none">
        ealize<span className="text-blue">.</span>
      </span>
    </span>
  );
}
